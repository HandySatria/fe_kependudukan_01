import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'penduduk-paging.component.html'
})
export class PendudukPagingComponent implements OnInit {

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2, private http: HttpClient,
    private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router
  ) {
  }

  reqObj : any;
  reqSearchObj : any;
  result : any;
  listGender : any;
  listRT : any;
  listRW : any;
  listDusun : any;
  listAgama : any;
  listPendidikan : any;
  listPekerjaan : any;
  listStatPerkawinan : any;
  listHubKeluarga : any;
  listGolDarah : any;
  listKewarganegaraan : any;
  listStatPenduduk : any;
  dusuns : any;
  refMasterResponse : any;

  searchForm = this.builder.group({
    no_kk : this.builder.control(''),
    nik : this.builder.control(''),
    nama : this.builder.control(''),
    dusun : this.builder.control(''),
    rw : this.builder.control(''),
    rt : this.builder.control(''),
    jenis_kelamin : this.builder.control(''),
    tempat_lahir : this.builder.control(''),
    agama : this.builder.control(''),
    pendidikan : this.builder.control(''),
    pekerjaan : this.builder.control(''),
    golongan_darah : this.builder.control(''),
    status_perkawinan : this.builder.control(''),
    hubungan_keluarga : this.builder.control(''),
    kewarganegaraan : this.builder.control(''),
   });

  async ngOnInit(): Promise<void> {
    this.listGender =  await this.getRefMaster('GENDER');
    this.listRT =  await this.getRefMaster('RT');
    this.listRW =  await this.getRefMaster('RW');
    this.listDusun =  await this.getRefMaster('DUSUN');
    this.listAgama =  await this.getRefMaster('AGAMA');
    this.listPendidikan =  await this.getRefMaster('PENDIDIKAN');
    this.listPekerjaan =  await this.getRefMaster('PEKERJAAN');
    this.listStatPerkawinan =  await this.getRefMaster('STATUS_PERKAWINAN');
    this.listHubKeluarga =  await this.getRefMaster('HUBUNGAN_KELUARGA');
    this.listGolDarah =  await this.getRefMaster('GOLONGAN_DARAH');
    this.listKewarganegaraan =  await this.getRefMaster('KEWARGANEGARAAN');
    this.listStatPenduduk =  await this.getRefMaster('STATUS_KEPENDUDUKAN');

    this.search()
  }

  search(){
    this.reqSearchObj = {};
    if (this.searchForm.controls.no_kk.value != ''){
      this.reqSearchObj["no_kk"] = this.searchForm.controls.no_kk.value;
    }
    if (this.searchForm.controls.nik.value != ''){
      this.reqSearchObj["nik"] = this.searchForm.controls.nik.value;
    }
    if (this.searchForm.controls.nama.value != ''){
      this.reqSearchObj["nama"] = this.searchForm.controls.nama.value;
    }
    if (this.searchForm.controls.jenis_kelamin.value != ''){
      this.reqSearchObj["jenis_kelamin"] = this.searchForm.controls.jenis_kelamin.value;
    }
    if (this.searchForm.controls.rt.value != ''){
      this.reqSearchObj["rt"] = this.searchForm.controls.rt.value;
    }
    if (this.searchForm.controls.rw.value != ''){
      this.reqSearchObj["rw"] = this.searchForm.controls.rw.value;
    }
    if (this.searchForm.controls.dusun.value != ''){
      this.reqSearchObj["dusun"] = this.searchForm.controls.dusun.value;
    }
    if (this.searchForm.controls.agama.value != ''){
      this.reqSearchObj["agama"] = this.searchForm.controls.agama.value;
    }
    if (this.searchForm.controls.pendidikan.value != ''){
      this.reqSearchObj["pendidikan"] = this.searchForm.controls.pendidikan.value;
    }
    if (this.searchForm.controls.pekerjaan.value != ''){
      this.reqSearchObj["pekerjaan"] = this.searchForm.controls.pekerjaan.value;
    }
    if (this.searchForm.controls.status_perkawinan.value != ''){
      this.reqSearchObj["status_perkawinan"] = this.searchForm.controls.status_perkawinan.value;
    }
    if (this.searchForm.controls.hubungan_keluarga.value != ''){
      this.reqSearchObj["hubungan_keluarga"] = this.searchForm.controls.hubungan_keluarga.value;
    }
    if (this.searchForm.controls.golongan_darah.value != ''){
      this.reqSearchObj["golongan_darah"] = this.searchForm.controls.golongan_darah.value;
    }
    if (this.searchForm.controls.kewarganegaraan.value != ''){
      this.reqSearchObj["kewarganegaraan"] = this.searchForm.controls.kewarganegaraan.value;
    }

    this.service.searchPenduduk(this.reqSearchObj).subscribe(
      (item: any) => {
        this.result = item.data.data;
      },
      (error) => {
      }
    );
  }

  async getRefMaster(masterType : string){
    return new Promise((resolve, reject) => {
      this.reqObj = {
        "master_type": masterType
      };

      this.service.getRefMasterByMasterType(this.reqObj).subscribe(
        (item: any) => {
          resolve(item.data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  addData(){
    this.router.navigate(['Penduduk/PendudukDetail'])
  }

  reset(){
    this.searchForm.reset();
  }

}
