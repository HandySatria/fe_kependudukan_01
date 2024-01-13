import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-penduduk-detail',
  templateUrl: './penduduk-detail.component.html',
  styleUrls: ['./penduduk-detail.component.scss']
})
export class PendudukDetailComponent {

  constructor(http: HttpClient,private builder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router, private route : ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      this.nik = params['nik'];
      this.action = params['action'];
      if (this.nik != null){
        this.mode = 'edit';
      }
    })
  }

  reqObj : any;
  reqAddObj : any;
  result : any;
  resultDataPenduduk : any;
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
  kategoriPenduduk : string = 'Penduduk';
  kategoriKelahiranAsli : string = 'KelahiranAsli';
  kategoriPindahan : string = 'Pindahan';
  nik : string ='';
  mode : string = '';
  action : string = '';
  isLoading : boolean = false;


  pendudukForm = this.builder.group({
    no_kk : ['',[Validators.required,Validators.pattern(/^\d+$/)]],
    nik : ['',[Validators.required, Validators.pattern(/^\d+$/)]],
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
    status : [''],
    tanggal_terbit_kk : [''],
    kategoriPenduduk : ['']
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

    if (this.mode === 'edit'){
      this.resultDataPenduduk = await this.getData(this.nik);
      this.pendudukForm.get('no_kk')?.patchValue(this.resultDataPenduduk.no_kk ?? "");
      this.pendudukForm.get('nik')?.patchValue(this.resultDataPenduduk.nik ?? "");
      this.pendudukForm.get('nama')?.patchValue(this.resultDataPenduduk.nama ?? "");
      this.pendudukForm.get('jenis_kelamin')?.patchValue(this.resultDataPenduduk.jenis_kelamin ?? "");
      this.pendudukForm.get('tempat_lahir')?.patchValue(this.resultDataPenduduk.tempat_lahir ?? "");
      if(this.resultDataPenduduk.tanggal_lahir != null){
        this.pendudukForm.get('tanggal_lahir')?.patchValue(formatDate(this.resultDataPenduduk.tanggal_lahir , 'yyyy-MM-dd', 'en-US') ?? "");
      }
      this.pendudukForm.get('agama')?.patchValue(this.resultDataPenduduk.agama ?? "");
      this.pendudukForm.get('dusun')?.patchValue(this.resultDataPenduduk.dusun ?? "");
      this.pendudukForm.get('rt')?.patchValue(this.resultDataPenduduk.rt ?? "");
      this.pendudukForm.get('rw')?.patchValue(this.resultDataPenduduk.rw ?? "");
      this.pendudukForm.get('pendidikan')?.patchValue(this.resultDataPenduduk.pendidikan ?? "");
      this.pendudukForm.get('pekerjaan')?.patchValue(this.resultDataPenduduk.pekerjaan ?? "");
      this.pendudukForm.get('golongan_darah')?.patchValue(this.resultDataPenduduk.golongan_darah ?? "");
      this.pendudukForm.get('status_perkawinan')?.patchValue(this.resultDataPenduduk.status_perkawinan ?? "");
      this.pendudukForm.get('hubungan_keluarga')?.patchValue(this.resultDataPenduduk.hubungan_keluarga ?? "");
      this.pendudukForm.get('kewarganegaraan')?.patchValue(this.resultDataPenduduk.kewarganegaraan ?? "");
      this.pendudukForm.get('nama_ayah')?.patchValue(this.resultDataPenduduk.nama_ayah ?? "");
      this.pendudukForm.get('nama_ibu')?.patchValue(this.resultDataPenduduk.nama_ibu ?? "");
      this.pendudukForm.get('no_paspor')?.patchValue(this.resultDataPenduduk.no_paspor ?? "");
      this.pendudukForm.get('no_kitas')?.patchValue(this.resultDataPenduduk.no_kitas ?? "");
      this.pendudukForm.get('status')?.patchValue(this.resultDataPenduduk.status ?? "");
      if (this.resultDataPenduduk.tanggal_terbit_kk != null){
        this.pendudukForm.get('tanggal_terbit_kk')?.patchValue(formatDate(this.resultDataPenduduk.tanggal_terbit_kk , 'yyyy-MM-dd', 'en-US'));
      }
      if(this.resultDataPenduduk.is_kelahiran_asli){
        this.pendudukForm.get('kategoriPenduduk')?.patchValue(this.kategoriKelahiranAsli);
      }
      else if(this.resultDataPenduduk.is_penduduk_pindah_masuk){
        this.pendudukForm.get('kategoriPenduduk')?.patchValue(this.kategoriPindahan);
      }
      else{
        this.pendudukForm.get('kategoriPenduduk')?.patchValue(this.kategoriPenduduk);
      }
    }

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

  async getData(nik : string){
    return new Promise((resolve, reject) => {
      this.service.getPendudukByNIK({nik:nik}).subscribe(
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
    this.isLoading = true;
    this.reqAddObj = {}
    this.reqAddObj["no_kk"] = this.pendudukForm.controls.no_kk.value
    this.reqAddObj["nik"] = this.pendudukForm.controls.nik.value
    this.reqAddObj["nama"] = this.pendudukForm.controls.nama.value
    this.reqAddObj["jenis_kelamin"] = this.pendudukForm.controls.jenis_kelamin.value
    this.reqAddObj["tempat_lahir"] = this.pendudukForm.controls.tempat_lahir.value
    this.reqAddObj["tanggal_lahir"] = this.pendudukForm.controls.tanggal_lahir.value
    this.reqAddObj["agama"] = this.pendudukForm.controls.agama.value
    this.reqAddObj["dusun"] = this.pendudukForm.controls.dusun.value
    this.reqAddObj["rw"] = this.pendudukForm.controls.rw.value
    this.reqAddObj["rt"] = this.pendudukForm.controls.rt.value
    this.reqAddObj["pendidikan"] = this.pendudukForm.controls.pendidikan.value
    this.reqAddObj["pekerjaan"] = this.pendudukForm.controls.pekerjaan.value
    this.reqAddObj["golongan_darah"] = this.pendudukForm.controls.golongan_darah.value
    this.reqAddObj["status_perkawinan"] = this.pendudukForm.controls.status_perkawinan.value
    this.reqAddObj["hubungan_keluarga"] = this.pendudukForm.controls.hubungan_keluarga.value
    this.reqAddObj["kewarganegaraan"] = this.pendudukForm.controls.kewarganegaraan.value
    this.reqAddObj["nama_ayah"] = this.pendudukForm.controls.nama_ayah.value
    this.reqAddObj["nama_ibu"] = this.pendudukForm.controls.nama_ibu.value
    this.reqAddObj["no_paspor"] = this.pendudukForm.controls.no_paspor.value
    this.reqAddObj["no_kitas"] = this.pendudukForm.controls.no_kitas.value
    this.reqAddObj["status"] = this.pendudukForm.controls.status.value
    this.reqAddObj["tanggal_terbit_kk"] = this.pendudukForm.controls.tanggal_terbit_kk.value
    this.reqAddObj["is_penduduk"] = true
    this.reqAddObj["is_penduduk_meninggal"] = false
    this.reqAddObj["is_penduduk_pindah_keluar"] = false
    this.reqAddObj["is_kelahiran_asli"] = false
    this.reqAddObj["is_penduduk_pindah_masuk"] = false
    if(this.pendudukForm.controls.kategoriPenduduk.value === this.kategoriKelahiranAsli){
      this.reqAddObj["is_kelahiran_asli"] = true
    }
    if(this.pendudukForm.controls.kategoriPenduduk.value === this.kategoriPindahan){
      this.reqAddObj["is_penduduk_pindah_masuk"] = true
    }

    if (this.mode === 'edit'){
      this.reqAddObj["penduduk_id"] = this.resultDataPenduduk.penduduk_id
      this.service.updatePenduduk(this.reqAddObj).subscribe(
        (item: any) => {
          this.result = item.data;
          this.toastr.success('Edit Data Berhasil');
        },
        (error) => {
          this.toastr.error(error.error.errors);
          this.isLoading = false;
          return error
        },
        ()=>{
          this.isLoading = false;
          this.router.navigate(['Penduduk/PendudukPaging'])
        });
    }else{
      this.service.createPenduduk(this.reqAddObj).subscribe(
        (item: any) => {
          this.result = item.data;
          this.toastr.success('Input Data Berhasil');
        },
        (error) => {
          this.toastr.error(error.error.errors);
          this.isLoading = false;
          return error
        },
        ()=>{
          this.isLoading = false;
          this.router.navigate(['Penduduk/PendudukPaging'])
        });
    }
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
