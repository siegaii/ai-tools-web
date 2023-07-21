const Avatars = [
	"https://vip2.loli.io/2022/05/12/1jXFgfhVrNP7wQK.jpg",
	"https://vip1.loli.io/2022/05/12/WvKsxlnujPgMOQG.jpg",
	"https://vip1.loli.io/2022/05/12/UzBjyD9IL27inFg.jpg",
	"https://vip1.loli.io/2022/05/12/m3zNwVXF4sJ1SMQ.jpg",
	"https://vip2.loli.io/2022/05/12/rYsKk4Hm9c6DAUz.jpg",
	"https://vip2.loli.io/2022/05/12/eoqH71Z5YTxjQNR.jpg",
	"https://vip2.loli.io/2022/05/12/qfTr3mxYNeUsKv9.jpg",
	"https://vip2.loli.io/2022/05/12/aZr3kHTE9OnVAgb.jpg",
	"https://vip1.loli.io/2022/05/12/bAr4EtkZ3BPKXDY.jpg",
	"https://vip1.loli.io/2022/05/12/mxvqnuQ31r2WlE8.jpg",
	"https://vip1.loli.io/2022/05/12/xlb8tW4GHpT6Acn.jpg",
	"https://vip2.loli.io/2022/05/12/DtfJoZWqur8XVd7.jpg",
	"https://vip2.loli.io/2022/05/12/xv4DHWofr8ueRGm.jpg",
	"https://vip2.loli.io/2022/05/12/9GuTmvE6tZnAUCe.jpg",
	"https://vip2.loli.io/2022/05/12/g1YTo2KJOVXbS8P.jpg",
	"https://vip2.loli.io/2022/05/12/ZFimAhnafLJpW24.jpg",
	"https://vip1.loli.io/2022/05/12/UJXDnjqvx9wTcI5.jpg",
	"https://vip2.loli.io/2022/05/12/lOCeyVjp3HXrF5K.jpg",
	"https://vip1.loli.io/2022/05/12/1nHR2mZMeDPKBl7.jpg",
	"https://vip2.loli.io/2022/05/12/IMUB8N4rLdFzZkP.jpg",
	"https://vip1.loli.io/2022/05/12/NX6gOwQrsea2AvC.jpg",
	"https://vip2.loli.io/2022/05/12/lgui7fpFVqPHAkX.jpg",
	"https://vip1.loli.io/2022/05/12/tiCFRBWA8LPOyz4.jpg",
];

export function getRandomAvatar(): string {
	const randomIndex = Math.floor(Math.random() * Avatars.length);
	return Avatars[randomIndex];
}

export function getFallbackAvatar(name: string) {
	return `https://ui-avatars.com/api/?name=${name}&size=200&background=FF5733&color=FFFFFF&font-size=0.5&rounded=true`;
}
