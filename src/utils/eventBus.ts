import mitt from 'mitt';
type Events = {
  handleSelectPrompt: string;
};

const eventBus = mitt<Events>();
export default eventBus;