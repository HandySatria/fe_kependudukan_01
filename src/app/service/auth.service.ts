import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiurl='http://localhost:4000';

  // Login Region
  getHeader(){
   const token = localStorage.getItem('token') || '';
   const header = new HttpHeaders().set('Authorization', token);
   return header;
  }
  login(reqObj : any){
    return this.http.post(this.apiurl+'/user/login', reqObj);
  }
  logout(){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/user/logout',{username : localStorage.getItem('username')}, {headers : header});
  }
  isloggedin(){
    // this.http.post(this.apiurl+'/user/getUserbyUsername', {username : localStorage.getItem('username')}, {headers : this.header}).subscribe(
    //   (response : any) =>{
    //     if (response.data.username){
    //       return localStorage.getItem('username');
    //     }else{
    //       return null;
    //     }
    //   }
    //   );
    //   return null;
      return localStorage.getItem('token')!=null;
  }

  //Region Penduduk
  getAllPenduduk(){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/penduduk/GetAllPenduduk',{}, {headers : header});
  }
  getPendudukByNIK(reqObj : any){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/penduduk/GetPendudukByNIK',reqObj, {headers : header});
  }
  searchPenduduk(reqObj : any){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/penduduk/SearchPenduduk',reqObj, {headers : header});
  }
  createPenduduk(reqObj : any){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/penduduk/CreatePenduduk',reqObj, {headers : header});
  }
  updatePenduduk(reqObj : any){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/penduduk/UpdatePenduduk',reqObj, {headers : header});
  }


  //Region Ref Master
  getRefMasterByMasterType(reqObj : any){
    const header = this.getHeader();
    return this.http.post(this.apiurl+'/refmaster/GetRefMasterByMasterType',reqObj, {headers : header});
  }

  getrole(){
    return localStorage.getItem('role')!=null?localStorage.getItem('role')?.toString():'';
  }

}
