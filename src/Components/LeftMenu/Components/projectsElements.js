import PayMoneyApp from "../../../assets/image/projects/PayMoneyApp.png";
import TouristGuide from "../../../assets/image/projects/touristGuide.png";
import Lemion from "../../../assets/image/projects/limon ecommerce.png";
export const projectElements = [
    {
        id: 1,
        name: "WalletPay - Multi Wallet Mobile App",
        icon: "📱",
        description:
            "WalletPay – PayMoney Multi Wallet Mobile App is a convenient and secure mobile app that offers a wide range of features to help users manage their finances efficiently. This is the Android version of PayMoney – Secure Online Payment Gateway , which is connected with secured Rest API.",
        demoAPP:
            "https://drive.google.com/file/d/1lantzLXk93n91SN24A3VkO-pZMZBFZKe/view",
        demo: "https://codecanyon.net/item/walletpay-paymoney-multi-wallet-mobile-app/45435953?s_rank=1",
        technology: ["React Native", "Redux Toolkit", "Rest API"],
        image: PayMoneyApp,
        scroll: "-10%",
    },
    {
        id: 1,
        name: "Tourist Guide",
        icon: "✈️",
        description:
            "WalletPay – PayMoney Multi Wallet Mobile App is a convenient and secure mobile app that offers a wide range of features to help users manage their finances efficiently. This is the Android version of PayMoney – Secure Online Payment Gateway , which is connected with secured Rest API.",
        demo: "http://touristsguide.me/",
        image: TouristGuide,
        scroll: "-83%",
        codeLink: [
            { frontEnd: "https://github.com/sohantalukder/touristGuideClient" },
            {
                backEnd:
                    "https://github.com/sohantalukder/tourist_guide_backend",
            },
        ],
        technology: [
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "NextJs",
            "Tailwind CSS",
        ],
    },
    {
        id: 3,
        name: "Lemion Ecommerce",
        icon: "🛒",
        scroll: "-20%",
        description:
            "WalletPay – PayMoney Multi Wallet Mobile App is a convenient and secure mobile app that offers a wide range of features to help users manage their finances efficiently. This is the Android version of PayMoney – Secure Online Payment Gateway , which is connected with secured Rest API.",
        demo: "https://lemionecommerce.vercel.app/",
        image: Lemion,
        codeLink: ["https://github.com/sohantalukder/lemon_ecommerce"],
        technology: ["NodeJs", "ExpressJs", "MongoDB", "React", "Tailwind CSS"],
    },
];
