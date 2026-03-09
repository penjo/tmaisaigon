import SectionSlider from "./SectionSlider";

export default function Content6() {
    const activityData = {
        title: "HOẠT ĐỘNG",
        tabs: ["HOẠT ĐỘNG QUỐC TẾ", "HOẠT ĐỘNG TRONG NƯỚC"],
        images: [
            ["https://res.cloudinary.com/dcpftn9cy/image/upload/v1764333480/international8_glagbg.png"], // Ảnh tab 1
            ["https://res.cloudinary.com/dcpftn9cy/image/upload/v1764333481/international7_hqp8e4.png"]  // Ảnh tab 2
        ]
    };
    return (
        <div>
            <SectionSlider title={activityData.title} tabs={activityData.tabs} data={activityData.images} />
        </div>
    );
}