export interface Result<T>{
  result: T
  rowcount?: number
}

export interface Church{
  church_id: number
  church_name: string
  city_id: number
  city_name: string
  state_id: number
  state_name: string
  state_short: string
  district_id: number
  region_id: number
  association_id: number
  union_id: number
  division_id: number
  division_name: string
  union_name: string
  association_name: string
  region_name: string
  district_name: string
  church_type_name: string
  church_galleryOptimize: string
  church_photoOptimize: string
  church_footerOptimize: string
  church_backgroundOptimize: string
  church_clockOptimize: string
  church_type_id: number
  church_corporate_name: string
  church_members: number
  church_capacity: number
  church_street: string
  church_number: number
  church_location: string
  church_zipcode: string
  church_telephone: number
  church_bank_beneficiary_name: string
  church_bank_beneficiary_doc: string
  church_bank_name: string
  church_bank_agency: string
  church_bank_account: string
  church_domain: string
  church_aboutus: string
  church_aboutus_short: string
  church_messagepastor: string
  church_slogan: string
  church_photo_height: string
  church_colorbase: string
  church_headerheight: string
  church_urlmap: string
}
