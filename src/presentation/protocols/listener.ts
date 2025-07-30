export interface ListenerResponse {
  processed: boolean;
}

export interface Listener<T = any> {
  listen: (request: T) => Promise<ListenerResponse>;
}
