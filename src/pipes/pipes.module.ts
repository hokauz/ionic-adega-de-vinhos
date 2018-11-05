import { NgModule } from '@angular/core';
import { DefaultImagePipe } from './default-image/default-image';
import { DefaultGlassPipe } from './default-glass/default-glass';
import { DefaultFlagPipe } from './default-flag/default-flag';
@NgModule({
	declarations: [
        DefaultImagePipe,
        DefaultGlassPipe,
        DefaultFlagPipe,
    ],
	imports: [],
	exports: [
        DefaultImagePipe,
        DefaultGlassPipe,
        DefaultFlagPipe,
    ]
})
export class PipesModule {}
