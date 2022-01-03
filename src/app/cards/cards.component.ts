import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CardModalComponent} from './card-modal/card-modal.component';
import {CardService} from '../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    public dialog: MatDialog,
    public cardService: CardService,

  ) { }

  ngOnInit(): void {
    this.cardService.getCards();
  }
  l

  openAddCardModal(): void {
    this.dialog.open(CardModalComponent, {
      width: '400px'
    });
  }

}
