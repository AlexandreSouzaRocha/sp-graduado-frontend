export default interface IAssociatedGraduatesPagination {
  pagination: {
    previousPage: number | null;
    currentPage: number;
    nextPage: number | null;
    lastPage: boolean;
    totalPages: number;
    totalItems: number;
    maxItemsPerPage: number;
    totalItemsPage: number;
    items: Array<any>;
  };
}
