// Импорт библиотеки react-table
import { useTable, useSortBy, usePagination } from 'react-table';

// Функция для получения данных
async function fetchData() {
 const response = await fetch('https://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true');
 const data = await response.json();
 return data;
}

// Компонент таблицы
function DataTable() {
 const [data, setData] = useState([]);
 const [pageIndex, setPageIndex] = useState(0);
 const [pageSize, setPageSize] = useState(50);

 useEffect(() => {
  fetchData().then(setData);
 }, []);

 const columns = useMemo(
  () => [
    {
      Header: 'First Name',
      accessor: 'fname',
    },
    {
      Header: 'Last Name',
      accessor: 'lname',
    },
    {
      Header: 'Phone',
      accessor: 'tel',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'City',
      accessor: 'city',
    },
    {
      Header: 'State',
      accessor: 'state',
    },
    {
      Header: 'Zip',
      accessor: 'zip',
    },
  ],
  []
 );

 const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
  canPreviousPage,
  canNextPage,
  nextPage,
  previousPage,
  setPageSize,
 } = useTable(
  {
    columns,
    data,
    initialState: { pageIndex, pageSize },
  },
  useSortBy,
  usePagination
 );

 return (
  <>
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                 {column.isSorted
                   ? column.isSortedDesc
                     ? ' 🔽'
                     : ' 🔼'
                   : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    <div>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous Page
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next Page
      </button>
      <select
        value={pageSize}
        onChange={e => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map(pageSize => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  </>
 );
}