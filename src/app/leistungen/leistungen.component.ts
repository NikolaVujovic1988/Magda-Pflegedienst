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
      items: ['Vitalzeichenkontrolle', 'Blutzuckerkontrolle', 'PEG-Versorgung', 'Katheterversorgung', 'Wundversorgung', 'Stomaversorgung', 'Medikamentengabe']
    },
    {
      imageUrl: '/assets/images/icons/Pflege.png',
      items: ['An- und Auskleiden', 'die Zubereitung von Mahlzeiten', 'Hilfestellung beim Essen', 'fachgerechte Verabreichung von Sondenkost', 'Mobilisierung', 'Unterstützung beim Lagern und Betten']
    },
    {
      imageUrl: '/assets/images/icons/Hauswirtschaft.png',
      items: ['Zur hauswirtschaftlichen Versorgung gehört unter anderem das Einkaufen, das Zubereiten von warmen und kalten Speisen, das Reinigen der Wohnung, Spülen, wechseln und waschen der Kleidung.']
    },
    {
      imageUrl: '/assets/images/icons/Beratung.png',
      items: ['Die Prüfung der Notwendigkeit, Ist die Notwendigkeit gegeben und es liegt keine ärztliche Verordnung vor', 'unterstützen wir Sie bei der Einholung einer ärztlichen Verordnung nach Rücksprache mit allen Beteiligten, selbstverständlich unter Einhaltung der Datenschutzverordnung.', 'die Klärung der Kostenübernahme durch die Krankenkasse, je nach individueller Situation ist es möglich, dass private Kosten entstehen. Diese besprechen wir transparent mit dem Patienten oder dessen Angehörigen. Sobald der persönliche Bedarf final abgesprochen wurde, beginnt die Erbringung der Pflegeleistungen.']

    }
  ];
}


