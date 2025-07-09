import { Controller, HttpResponse } from '@catalog-service/presentation/protocols';

export const controllerAdapter = async (controller: Controller, request?: any): Promise<HttpResponse> => {
  return controller.handle(request);
};
