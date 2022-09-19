declare namespace API {
  export interface APIResponse {
    status: Meta;
  }

  export interface Meta {
    locale: string;
    result_code: number;
    result_message: string;
    return_code: number;
    return_message: string;
    timezone: string;
  }

  // ---------------------------------------------------------------------------

  export interface RSToken extends APIResponse {
    Data: Token;
  }

  export interface Token {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    token_type: string;
  }

  // ---------------------------------------------------------------------------
  export interface RSAuthUser extends APIResponse {
    Data: Employee;
  }

  export interface Employee {
    uuid: string;
    createdAt: string;
    updatedAt: string;
    role: Role;
    pivotCustomers: any;
    followedEmployees: any;
    wxDepartments: any;
    roleID: string;
    locale: string;
    email: string;
    firstname: string;
    lastname: string;
    name: string;
    mobile: string;
    wxAlias: string;
    wxAvatar: string;
    wxDepartment: string;
    wxEmail: string;
    wxEnable: number;
    wxEnglishName: string;
    wxExtAttr: string;
    wxExternalProfile: string;
    wxGender: string;
    wxHideMobile: number;
    wxIsLeader: number;
    wxIsLeaderInDept: string;
    wxMainDepartment: number;
    wxMobile: string;
    wxName: string;
    wxOrder: string;
    wxPosition: string;
    wxQrCode: string;
    wxStatus: number;
    wxTelephone: string;
    wxThumbAvatar: string;
    wxCorpID: string;
    wxOpenUserID: string;
    wxUserID: string;
    wxOpenID: string;
  }

  export interface Role {
    createdAt: string;
    updatedAt: string;
    parent: any;
    children: any;
    roleID: string;
    name: string;
    parentID: string;
    type: number;
  }
}