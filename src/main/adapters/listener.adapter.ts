import { Listener, ListenerResponse } from '@catalog-service/presentation/protocols';

export const listenerAdapter = async (controller: Listener, request?: any): Promise<ListenerResponse> => {
  return controller.listen(request);
};
