import { Component } from '@angular/core';

@Component({
  selector: 'app-leistungen',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.scss']
})
export class LeistungenComponent {
  boxes = [
    { 
      imageUrl: '/assets/images/icons/Medikamenten.png',
      headline: 'Behandlungspflege (wird von Arzt verordnet) wie zum Beispiel:',
      items: ['Vitalzeichenkontrolle', 'Blutzuckerkontrolle', 'PEG-Versorgung', 'Katheterversorgung', 'Wundversorgung', 'Stomaversorgung', 'Medikamentengabe']
    },
    { 
      imageUrl: '/assets/images/icons/Pflege.png',
      headline: 'Grundpflege wie zum Beispiel:',
      items: ['An- und Auskleiden', 'die Zubereitung von Mahlzeiten', 'Hilfestellung beim Essen', 'fachgerechte Verabreichung von Sondenkost', 'Mobilisierung', 'Unterstützung beim Lagern und Betten']
    },
    {
      imageUrl: '/assets/images/icons/Hauswirtschaft.png',
      headline: 'Hauswirtschaftlichen Versorgung:',
      items: ['Zur hauswirtschaftlichen Versorgung gehört unter anderem das Einkaufen, das Zubereiten von warmen und kalten Speisen, das Reinigen der Wohnung, Spülen, wechseln und waschen der Kleidung.']
    }
  ];
}


