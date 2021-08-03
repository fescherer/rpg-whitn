import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { ApresentationComponent } from './components/apresentation/apresentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableGameCharacteristicsComponent } from './components/table-game-characteristics/table-game-characteristics.component';
import { CaracterSheetComponent } from './pages/caracter-sheet/caracter-sheet.component';
import { HomeComponent } from './pages/home/home.component';
import { Hex3Component } from './components/hexagon/hex3/hex3.component';
import { HexDialogComponent } from './components/hexagon/hex-dialog/hex-dialog.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Hex1Component } from './components/hexagon/hex1/hex1.component';
import { UrlDialogComponent } from './components/table-game-characteristics/currently-effects/url-dialog/url-dialog.component';
import { EffectsComponent } from './components/table-game-characteristics/currently-effects/effects/effects.component';
import { CurrentlyEffectsComponent } from './components/table-game-characteristics/currently-effects/currently-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApresentationComponent,
    TableGameCharacteristicsComponent,
    UrlDialogComponent,
    CaracterSheetComponent,
    HomeComponent,
    Hex3Component,
    HexDialogComponent,
    EffectsComponent,
    Hex1Component,
    CurrentlyEffectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
