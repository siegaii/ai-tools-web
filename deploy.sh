image_name="ai-tools-web"

if docker ps -aq -f name=$image_name > /dev/null; then
    if docker inspect -f '{{.State.Running}}' $image_name > /dev/null; then
        docker stop $image_name > /dev/null
    fi
    docker rm $image_name > /dev/null
    echo "已删除容器 $image_name。"
fi

if docker images --format "{{.Repository}}" | grep -q "^$image_name$"; then
    docker rmi $image_name > /dev/null
    echo "已删除镜像 $image_name。"
fi

image_ids=$(docker images -aq --filter "dangling=true")

if [[ -n "$image_ids" ]]; then
  echo "Removing the following Docker images with tag <none>:"
  echo "$image_ids"
  echo ""

  dependent_images=$(docker images --format '{{.Repository}}:{{.Tag}} {{.Parent}}' | grep '<none>' | awk '{print $1}')

  if [[ -n "$dependent_images" ]]; then
    echo "Removing dependent images:"
    echo "$dependent_images"
    echo ""
    docker rmi -f $dependent_images
  fi

  docker rmi -f $image_ids
else
  echo "No Docker images with tag <none> found."
fi

docker build --no-cache -t $image_name .

docker run -itd \
-p 80:80 \
-p 443:443 \
-v /root/ai-tools-web/dist:/usr/share/nginx/html \
--name $image_name \
$image_name

echo "已启动容器 $image_name。"

