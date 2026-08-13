"use client"
"use no memo"

import { useMemo, useState } from "react"
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { members, type Member } from "@/lib/data"

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((part) => !/^(swami|shri|guruji|yogi|yogini|dr\.?|sadhak|acharya)$/i.test(part))
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

const statusVariant: Record<Member["status"], React.ComponentProps<typeof Badge>["variant"]> = {
  Senior: "primary-light",
  Active: "success-light",
  Associate: "info-light",
}

function SortableHeader({
  column,
  children,
}: {
  column: Column<Member, unknown>
  children: React.ReactNode
}) {
  const sorted = column.getIsSorted()

  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-3 h-8 data-[state=open]:bg-transparent"
      onClick={() => column.toggleSorting(sorted === "asc")}
    >
      {children}
      {sorted === "asc" ? (
        <ArrowUp className="size-3.5" aria-hidden />
      ) : sorted === "desc" ? (
        <ArrowDown className="size-3.5" aria-hidden />
      ) : (
        <ChevronsUpDown className="size-3.5 opacity-50" aria-hidden />
      )}
    </Button>
  )
}

function AvatarCell({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-8">
        <AvatarFallback className="bg-muted text-xs">
          {getInitials(name)}
        </AvatarFallback>
      </Avatar>
      <span className="font-medium">{name}</span>
    </div>
  )
}

export function MemberGrid() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={
              table.getIsSomePageRowsSelected() &&
              !table.getIsAllPageRowsSelected()
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            indeterminate={row.getIsSomeSelected() && !row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            onClick={(event) => event.stopPropagation()}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        size: 40,
      },
      {
        accessorKey: "name",
        header: ({ column }) => (
          <SortableHeader column={column}>Member</SortableHeader>
        ),
        cell: ({ row }) => <AvatarCell name={row.original.name} />,
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: (info) => (
          <span className="text-muted-foreground">{info.getValue<string>()}</span>
        ),
      },
      {
        accessorKey: "style",
        header: "Practice",
        cell: (info) => (
          <Badge variant="outline" size="sm">
            {info.getValue<string>()}
          </Badge>
        ),
      },
      {
        accessorKey: "since",
        header: ({ column }) => (
          <SortableHeader column={column}>Since</SortableHeader>
        ),
        cell: (info) => info.getValue<string>(),
        size: 80,
      },
      {
        accessorKey: "city",
        header: "City",
        cell: (info) => (
          <span className="text-muted-foreground">{info.getValue<string>()}</span>
        ),
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <SortableHeader column={column}>Status</SortableHeader>
        ),
        cell: ({ row }) => (
          <Badge
            variant={statusVariant[row.original.status]}
            size="sm"
            radius="full"
          >
            {row.original.status}
          </Badge>
        ),
      },
    ],
    []
  )

  const table = useReactTable({
    data: members,
    columns,
    state: { sorting, rowSelection },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    enableRowSelection: true,
    enableSorting: true,
    enableSortingRemoval: true,
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
  })

  const pageIndex = table.getState().pagination.pageIndex
  const pageSize = table.getState().pagination.pageSize
  const recordCount = members.length
  const from = recordCount === 0 ? 0 : pageIndex * pageSize + 1
  const to = Math.min((pageIndex + 1) * pageSize, recordCount)
  const pageCount = table.getPageCount()

  return (
    <div className="w-full overflow-hidden">
      <div className="rounded-2xl border bg-background">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="h-10">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() ? "selected" : undefined}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="text-muted-foreground h-24 text-center"
                >
                  No members found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col gap-2.5 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <div className="flex items-center gap-2.5">
          <span className="text-muted-foreground text-sm">
            Rows per page
          </span>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              const newPageSize = Number(value)
              table.setPageSize(newPageSize)
            }}
          >
            <SelectTrigger className="w-16" size="sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              align="start"
              alignItemWithTrigger={false}
              className="min-w-(--anchor-width)"
            >
              {[8, 12, 24].map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:justify-end">
          <span className="text-muted-foreground text-sm">
            Showing {from} - {to} of {recordCount} members
          </span>
          {pageCount > 1 && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">Go to previous page</span>
                <ChevronLeft className="size-4" aria-hidden />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: pageCount }, (_, i) => (
                  <Button
                    key={i}
                    size="icon-sm"
                    variant="ghost"
                    className={cn(
                      "text-muted-foreground",
                      pageIndex === i && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => table.setPageIndex(i)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <span className="sr-only">Go to next page</span>
                <ChevronRight className="size-4" aria-hidden />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
