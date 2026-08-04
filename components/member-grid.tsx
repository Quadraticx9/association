"use client"
"use no memo"

import { useMemo, useState } from "react"
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/reui/badge"
import {
  DataGrid,
  DataGridContainer,
} from "@/components/reui/data-grid/data-grid"
import {
  DataGridTable,
  DataGridTableRowSelect,
  DataGridTableRowSelectAll,
} from "@/components/reui/data-grid/data-grid-table"
import { DataGridPagination } from "@/components/reui/data-grid/data-grid-pagination"
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

  const columns = useMemo<ColumnDef<Member>[]>(
    () => [
      {
        id: "select",
        header: () => <DataGridTableRowSelectAll />,
        cell: ({ row }) => <DataGridTableRowSelect row={row} />,
        enableSorting: false,
        size: 40,
      },
      {
        accessorKey: "name",
        header: "Member",
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
        header: "Since",
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
        header: "Status",
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
    state: { sorting },
    onSortingChange: setSorting,
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

  return (
    <DataGrid
      table={table}
      recordCount={members.length}
      tableLayout={{
        dense: true,
        rowBorder: true,
        headerBackground: false,
        headerSticky: true,
        headerBorder: true,
        columnsVisibility: true,
        width: "fixed",
      }}
    >
      <DataGridContainer>
        <DataGridTable />
      </DataGridContainer>
      <DataGridPagination
        sizes={[8, 12, 24]}
        info="Showing {from} - {to} of {count} members"
      />
    </DataGrid>
  )
}