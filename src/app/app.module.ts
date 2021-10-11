import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { ApresentationComponent } from './components/apresentation/apresentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AttributesComponent } from './components/attributes/attributes.component';
import { Hex4Component } from './components/hexagon/hex4/hex4.component';
import { Hex2Component } from './components/hexagon/hex2/hex2.component';
import { SecondaryAttributesComponent } from './components/secondary-attributes/secondary-attributes.component';
import { StabilityComponent } from './components/stability/stability.component';
import { ListSourcesDialogComponent } from './components/list-sources-dialog/list-sources-dialog.component';
import { ListEffectsDialogComponent } from './components/list-effects-dialog/list-effects-dialog.component';
import { TextAreasComponent } from './components/text-areas/text-areas.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { WeaponDialogComponent } from './components/weapons/weapon-dialog/weapon-dialog.component';
import { DialogWeaponsListComponent } from './components/dialog-weapons-list/dialog-weapons-list.component';

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
    AttributesComponent,
    Hex4Component,
    Hex2Component,
    SecondaryAttributesComponent,
    StabilityComponent,
    ListSourcesDialogComponent,
    ListEffectsDialogComponent,
    TextAreasComponent,
    InventoryComponent,
    WeaponsComponent,
    TemplatesComponent,
    WeaponDialogComponent,
    DialogWeaponsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
