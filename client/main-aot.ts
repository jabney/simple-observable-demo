import { platformBrowser } from '@angular/platform-browser'
/* The app.module.ngfactory file won't exist until build time. */
import { AppModuleNgFactory } from '../aot/client/app/app.module.ngfactory'
import { enableProdMode } from '@angular/core'

enableProdMode()
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
