import SectionSlider from "./SectionSlider";
export default function Content5() {
    const eventData = {
        title: "TỔ CHỨC SỰ KIỆN",
        tabs: ["TẠI DOANH NGHIỆP", "TẠI KHÁCH SẠN QUỐC TẾ"],
        images: [
            [
                "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764324880/local1_ep7tb1.jpg",
                "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764333121/internal16_l7jzk1.png"
            ], // Ảnh tab 1
            [
                "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764333481/international7_hqp8e4.png",
                "https://res.cloudinary.com/dcpftn9cy/image/upload/v1764333121/internal16_l7jzk1.png",
            ]  // Ảnh tab 2
        ],
        captions:
            [
            [
                "Khai mạc triển lãm",
                "Lễ ký kết hợp tác"
            ],
            [
                "Triển lãm quốc tế",
                "Sự kiện doanh nghiệp"
            ]
            ]

    };
    return (
        <div>
            <SectionSlider title={eventData.title} tabs={eventData.tabs} data={eventData.images} captions={eventData.captions}/>
        </div>
    );
}