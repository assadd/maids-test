export interface UserState {
    usersByPage: { [page: number]: any };
    loading: boolean;
    error: any;
}
