import { IProtectEndpointParams, IRequest } from '../interfaces'

/**
 * Called when an endpoint has security applied to it.
 */
export function protectEndpoint (params: IProtectEndpointParams) {
  return async (req: IRequest, res, next) => {
    // You must define how the auth behavior should work, else it will proceed to the
    // routing middleware
    next()
  }
}
