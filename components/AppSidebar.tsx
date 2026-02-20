"use client"

import { UsersIcon, FolderIcon, BellSimpleIcon, SwatchesIcon, GearIcon, ShareNetworkIcon, ChatsCircleIcon } from "@phosphor-icons/react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import Link from "next/link"
import Image from "next/image"

const items = [
  {
    title: "Alunos",
    url: "/",
    icon: UsersIcon  
  },
  {
    title: "Biblioteca",
    url: "#",
    icon: FolderIcon 
  },
  {
    title: "Notificações",
    url: "#",
    icon: BellSimpleIcon  
  },
  {
    title: "Branding",
    url: "#",
    icon: SwatchesIcon
  },
  {
    title: "Configurações",
    url: "#",
    icon: GearIcon 
  },
]

const itemsFooter = [
  {
    title: "Convide seus amigos",
    url: "#",
    icon: ShareNetworkIcon 
  },
  {
    title: "Envie uma sugestão",
    url: "#",
    icon: ChatsCircleIcon 
  },
]

const AppSidebar = () => {
  return (
    <Sidebar variant="inset" className="p-3">
      <SidebarHeader className="mb-3">
        <Image src={"/logo-mova.svg"} alt="logo Mova" width={73} height={14} className=""/>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {items.map(item => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={item.title === "Alunos" ? true : false}>
                  <Link href={item.url}>
                    <item.icon size={20} weight="duotone" color={item.title === "Alunos" ? "#62B800" : "#57574F"}/>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.title === "Notificações" && <SidebarMenuBadge className="bg-[#FE6C32] text-white rounded-full px-2">8</SidebarMenuBadge>}
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            {itemsFooter.map(itemFooter => (
              <SidebarMenuItem key={itemFooter.title}>
                <SidebarMenuButton asChild>
                  <Link href={itemFooter.url}>
                    <itemFooter.icon size={20} weight="duotone" />
                    <span>{itemFooter.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar