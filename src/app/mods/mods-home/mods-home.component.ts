import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Why sky is blue?', content: 'Because of air' },
    { title: 'What does an orange taste like?', content: 'Like an orange' },
    { title: 'What colour is that cat?', content: 'The cat is grey' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
