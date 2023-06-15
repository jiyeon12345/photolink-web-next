interface PaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pageCount = Math.ceil(totalItems / itemsPerPage)
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1)

  return (
    <nav>
      <ul className="flex space-x-2">
        {pages.map((page) => (
          <li
            key={page}
            className={`cursor-pointer py-[6px] px-[14px] rounded-xl transition duration-500
                ${
                  page === currentPage
                    ? 'bg-primary hover:bg-primaryDark text-white'
                    : 'text-primary hover:bg-border'
                }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
