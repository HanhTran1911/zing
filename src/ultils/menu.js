import icons from "./icons"
const {
    MdLibraryMusic,SiCircleci,TbChartArcs
} = icons
export const sidebarMenu =[
    {
        path:'personal',
        text: 'Cá nhân',
        icons: <MdLibraryMusic size={24} />
    },
    {
        path:'',
        text: 'Khám phá',
        icons: <SiCircleci size={24}/>
    },
    {
        path:'zing-chart',
        text: '#zing-chart',
        icons: <TbChartArcs size={24} />
    },
]