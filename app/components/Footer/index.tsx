export function Footer() {
    return (
        <div className="relative bg-grayscale-iron border-t-[1px] border-grayscale-gray rounded-tl-[16px] rounded-tr-[16px] mt-[-16px]">
            <div className="absolute right-[24px] top-[-41px] flex flex-col justify-center items-center gap-[10px] bg-grayscale-iron button-shadow-2 rounded-[16px] w-[85px] h-[82px]">
                <div className="border-primary border-x-transparent border-t-transparent border-solid border-b-[14px] border-x-[14px] rounded-[2px] to-top-shadow"></div>
                <div className="en-body-1 text-[15px] text-secondary-light">TO TOP</div>
            </div>
            <div className="flex flex-col pt-[48px] pb-[32px] mx-[24px] gap-[72px]">
                <div className="">
                    <img src="/assets/logo_mobile.png" alt="logo" />
                </div>
                <div className="text-grayscale-light/50">
                    <div className="flex flex-col mb-[40px] gap-[16px]">
                        <div className="flex items-center gap-[16px]">
                            <img src="assets/icon_map.png" alt="icon_map" />
                            <div className="nav-title text-[15px]">桃園市大園區大成路一段2號6樓</div>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <img src="assets/icon_phone.png" alt="icon_phone" />
                            <div className="en-body-1 text-[15px]">(03)287-5465</div>
                        </div>
                        <div className="flex items-center gap-[16px]">
                            <img src="assets/icon_mail.png" alt="icon_mail" />
                            <div className="en-body-1-ag">service@mryc.com.tw</div>
                        </div>
                    </div>
                    <div className="en-minimum text-[12px] text-center">
                        Copyright © 2022 BAIYUE INFORMATION CO.,LTD. All rights reserved .
                    </div>
                </div>
            </div>
        </div>
    );
}
