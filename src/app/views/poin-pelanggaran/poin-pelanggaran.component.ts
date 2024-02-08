import { Component } from '@angular/core';

@Component({
  selector: 'app-poin-pelanggaran',
  templateUrl: './poin-pelanggaran.component.html',
  styleUrls: ['./poin-pelanggaran.component.scss']
})
export class PoinPelanggaranComponent {
  isPelanggaranSaya : boolean = false;
  isPoinPelanggaran : boolean = false;
  pelanggaranSaya : string = 'pelanggaranSaya';
  poinPelanggaran : string = 'poinPelanggaran';
  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isPelanggaranSaya = true;
  }

  selectNavLink(selected : any){
    if(selected === this. pelanggaranSaya){
      this.isPelanggaranSaya = true;
      this.isPoinPelanggaran = false;
    }
    else if ( selected === this.poinPelanggaran){
      this.isPelanggaranSaya = false;
      this.isPoinPelanggaran = true;
    }

  }
}
