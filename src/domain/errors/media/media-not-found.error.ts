export class MediaNotFoundError extends Error {
  constructor() {
    super('Media Not Found');
    this.name = 'MediaNotFoundError';
  }
}
