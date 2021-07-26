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
import { CurrentlyEffectsComponent } from './components/table-game-characteristics/currently-effects/currently-effects.component';
import { StatsComponent } from './components/table-game-characteristics/stats/stats.component';
import { UrlDialogComponent } from './components/table-game-characteristics/stats/url-dialog/url-dialog.component';
import { CaracterSheetComponent } from './pages/caracter-sheet/caracter-sheet.component';
import { HomeComponent } from './pages/home/home.component';
import { Hex3Component } from './components/hexagon/hex3/hex3.component';
import { HexDialogComponent } from './components/hexagon/hex-dialog/hex-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ApresentationComponent,
    TableGameCharacteristicsComponent,
    CurrentlyEffectsComponent,
    StatsComponent,
    UrlDialogComponent,
    CaracterSheetComponent,
    HomeComponent,
    Hex3Component,
    HexDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
