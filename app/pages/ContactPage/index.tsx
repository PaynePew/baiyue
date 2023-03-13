import { FooterSimple } from "~/components/Footer";
import styles from "./styles.css";

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}

export function ContactPage() {
    return (
        <section className="w-full bg-grayscale-iron">
            <div className="flex flex-col pt-[141px] mx-[24px] mb-[80px] md:mx-[40px] md:pt-[206px] md:mb-[120px] lg:pt-[336px] lg:mx-[120px] lg:mb-[149.5px]">
                <div className="flex justify-between items-end mb-[48px] md:mb-[57px] lg:mb-[98px]">
                    <div className="flex flex-col items-start justify-center gap-[4px] md:gap-[8px]">
                        <div className="display-1 text-grayscale-gainsboro">聯絡我們</div>
                        <div className="en-h2 text-primary uppercase">contact us</div>
                    </div>
                    <div className="hidden lg:flex gap-[24px] nav-title text-grayscale-light justify-center items-center cursor-pointer">
                        <div className="py-[8px] border-b-[1px] hover:text-grayscale-light">首頁</div>
                        <span className="w-[0px] h-[16px] border-[1px] border-solid border-grayscale-dark "></span>
                        <div className="py-[8px] opacity-50 hover:text-grayscale-light hover:opacity-100">聯絡我們</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[16px] mb-[24px] md:mb-[32px] md:items-start lg:gap-[40px] lg:mb-[48px]">
                    <h2 className="text-grayscale-gainsboro">百越工程資訊有限公司</h2>
                    {/* todo: update googleMap */}
                    <div className="w-full h-[216px] md:h-[230px] lg:h-[400px]">
                        <iframe
                            title="百越工程資訊有限公司"
                            className="border-0 w-full h-full max-w-full grayscale"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD78M-Wm7jw8EBXT6eg1AqiTUQWv6zn344&q=桃園市大園區大成路一段2號6樓`}
                        ></iframe>
                    </div>
                </div>
                {/* Contact Info */}
                <div className="flex flex-col gap-[12px] md:gap-[16px] lg:flex-row lg:gap-[24px]">
                    <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                        <div className="flex items-center justify-center gap-[16px]">
                            <img src="/assets/icon_map.png" alt="icon_map" />
                            <div className="body-1 font-[300] text-grayscale-light">桃園市大園區大成路一段2號6樓</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                        <div className="flex items-center gap-[16px]">
                            <img src="/assets/icon_phone.png" alt="icon_phone" />
                            <div className="en-body-1 text-grayscale-light">(03)287-5465</div>
                        </div>
                    </div>
                    <div className="flex justify-start items-center w-full dec-shadow-1 py-[20px] px-[24px] rounded-[16px] md:p-[32px]">
                        <div className="flex items-center justify-center gap-[16px]">
                            <img src="/assets/icon_mail.png" alt="icon_mail" />
                            <div className="en-body-1 text-grayscale-light uppercase">SERVICE@mryc.com.tw</div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSimple />
        </section>
    );
}
