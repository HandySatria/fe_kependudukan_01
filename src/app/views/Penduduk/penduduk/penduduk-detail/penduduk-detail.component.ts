import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-penduduk-detail',
  templateUrl: './penduduk-detail.component.html',
  styleUrls: ['./penduduk-detail.component.scss']
})
export class PendudukDetailComponent {

  constructor(http: HttpClient,
    private builder: FormBuilder, private toastr: ToastrService, private service: AuthService, private router: Router){

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
  listStatus : any;
  dusuns : any;
  refMasterResponse : any;
  isWNA : boolean = false;

  pendudukForm = this.builder.group({
    no_kk : ['',[Validators.required]],
    nik : ['',[Validators.required]],
    nama : ['',[Validators.required]],
    jenis_kelamin : [''],
    tempat_lahir : [''],
    tanggal_lahir : [''],
    agama : [''],
    dusun : [''],
    rw : [''],
    rt : [''],
    pendidikan : [''],
    pekerjaan : [''],
    golongan_darah : [''],
    status_perkawinan : [''],
    hubungan_keluarga : [''],
    kewarganegaraan : [''],
    nama_ayah : [''],
    nama_ibu : [''],
    no_paspor : [''],
    no_kitas : [''],
    status : ['']
   });

  async ngOnInit(): Promise<void> {
    this.isWNA = false
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
    this.listStatus =  await this.getRefMaster('STATUS');
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

  saveForm(){
    // this.toastr.warning('Invalid username or password');
  }

  selectKewarganegaraan(ev : any){
    if (ev.target.value === 'WNI'){
      this.pendudukForm.get('no_paspor')?.setValue('');
      this.pendudukForm.get('no_kitas')?.setValue('');
      this.isWNA = false
    }
    else if (ev.target.value === 'WNA'){
      this.isWNA = true
    }
  }

  showToastr(){
    this.toastr.warning('Data Masih Belum Benar');
  }

  cancel(){
    this.router.navigate(['Penduduk/PendudukPaging'])
  }


}
