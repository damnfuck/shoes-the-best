// js/products.js
const products = [
    {
        id: 1,
        name: "Nike Air Force 1 Low",
        subtitle: "Biểu tượng thời trang đường phố với thiết kế cổ điển",
        title: "Giày Nike Air Force 1 Low - Huyền thoại sneaker",
        description: [
            "Ra mắt vào năm 1982, Nike Air Force 1 Low là một trong những đôi giày sneaker biểu tượng nhất của Nike. Được thiết kế bởi Bruce Kilgore, đôi giày này mang phong cách cổ điển và dễ dàng phối đồ.",
            "Chất liệu da cao cấp và công nghệ Nike Air mang lại sự thoải mái, bền bỉ, phù hợp cho cả hoạt động thường ngày và thời trang đường phố."
        ],
        features: [
            "Chất liệu da cao cấp, mềm mại",
            "Công nghệ Nike Air êm ái",
            "Đế cao su chống trơn trượt",
            "Thiết kế cổ thấp thời trang"
        ],
        price: "2.800.000 VND",
        image: "images/giày1.jpg",
        brand: "Nike"
    },
    {
        id: 2,
        name: "Nike Air Force 1 Mid",
        subtitle: "Phong cách cổ điển với thiết kế cổ trung",
        title: "Giày Nike Air Force 1 Mid - Đậm chất đường phố",
        description: [
            "Nike Air Force 1 Mid mang đến phong cách độc đáo với thiết kế cổ trung, phù hợp cho những ai yêu thích sự khác biệt.",
            "Chất liệu da cao cấp và đệm Nike Air đảm bảo sự thoải mái và độ bền vượt trội."
        ],
        features: [
            "Chất liệu da cao cấp",
            "Công nghệ Nike Air giảm chấn",
            "Đế cao su bền bỉ",
            "Thiết kế cổ trung cá tính"
        ],
        price: "3.000.000 VND",
        image: "images/giày2.jpg",
        brand: "Nike"
    },
    {
        id: 3,
        name: "Air Jordan 1 Retro",
        subtitle: "Biểu tượng sneaker với phong cách retro",
        title: "Giày Air Jordan 1 Retro - Huyền thoại bóng rổ",
        description: [
            "Air Jordan 1 Retro là dòng giày huyền thoại của Nike, ra mắt năm 1985, gắn liền với tên tuổi Michael Jordan.",
            "Thiết kế cổ cao, chất liệu da cao cấp và nhiều phối màu độc đáo khiến đôi giày này trở thành biểu tượng thời trang."
        ],
        features: [
            "Chất liệu da cao cấp",
            "Thiết kế cổ cao thời thượng",
            "Đệm Nike Air êm ái",
            "Phối màu đa dạng"
        ],
        price: "4.500.000 VND",
        image: "images/giày3.jpg",
        brand: "Nike"
    },
    {
        id: 4,
        name: "Air Jordan 4",
        subtitle: "Phong cách mạnh mẽ, đậm chất bóng rổ",
        title: "Giày Air Jordan 4 - Biểu tượng thời trang",
        description: [
            "Air Jordan 4 là một trong những mẫu giày nổi tiếng của dòng Jordan, ra mắt năm 1989, với thiết kế lưới độc đáo.",
            "Chất liệu cao cấp và công nghệ đệm Air mang lại sự thoải mái và phong cách mạnh mẽ."
        ],
        features: [
            "Chất liệu da và lưới cao cấp",
            "Công nghệ Air Cushion",
            "Thiết kế lưới độc đáo",
            "Đế cao su bền bỉ"
        ],
        price: "5.200.000 VND",
        image: "images/giày4.jpg",
        brand: "Nike"
    },
    {
        id: 5,
        name: "Nike React Infinity",
        subtitle: "Công nghệ tiên tiến cho trải nghiệm chạy bộ",
        title: "Giày Nike React Infinity - Thoải mái tối đa",
        description: [
            "Nike React Infinity được thiết kế để mang lại sự thoải mái tối đa cho chạy bộ và hoạt động hàng ngày.",
            "Công nghệ React foam và đế rộng cung cấp độ êm ái và ổn định vượt trội."
        ],
        features: [
            "Công nghệ React foam êm ái",
            "Đế rộng tăng ổn định",
            "Chất liệu lưới thoáng khí",
            "Thiết kế hiện đại"
        ],
        price: "3.500.000 VND",
        image: "images/giày5.jpg",
        brand: "Nike"
    },
    {
        id: 6,
        name: "Converse Chuck Taylor",
        subtitle: "Phong cách trẻ trung, năng động",
        title: "Giày Converse Chuck Taylor - Biểu tượng vượt thời gian",
        description: [
            "Converse Chuck Taylor All Star là dòng giày vải huyền thoại, được yêu thích từ những năm 1920.",
            "Thiết kế đơn giản, chất liệu canvas thoáng khí, phù hợp cho mọi phong cách."
        ],
        features: [
            "Chất liệu canvas thoáng khí",
            "Đế cao su bền bỉ",
            "Thiết kế cổ cao/cổ thấp linh hoạt",
            "Nhiều màu sắc tùy chọn"
        ],
        price: "1.500.000 VND",
        image: "images/giày6.jpg",
        brand: "Converse"
    },
    {
        id: 7,
        name: "Classic Sneaker",
        subtitle: "Phong cách cổ điển, dễ dàng phối đồ",
        title: "Giày Classic Sneaker - Đơn giản và tinh tế",
        description: [
            "Classic Sneaker mang phong cách tối giản, phù hợp cho mọi dịp, từ đi làm đến dạo phố.",
            "Chất liệu da tổng hợp và đế cao su mang lại độ bền và sự thoải mái."
        ],
        features: [
            "Chất liệu da tổng hợp",
            "Đế cao su bền bỉ",
            "Thiết kế tối giản",
            "Dễ phối đồ"
        ],
        price: "2.000.000 VND",
        image: "images/giày7.jpg",
        brand: "Basic"
    },
    {
        id: 8,
        name: "Nike Air Max 90",
        subtitle: "Phong cách thời thượng với đệm Air huyền thoại",
        title: "Giày Nike Air Max 90 - Đỉnh cao thời trang",
        description: [
            "Nike Air Max 90 là dòng giày sneaker nổi tiếng với công nghệ đệm Air Max, ra mắt năm 1990.",
            "Thiết kế đậm chất thời trang cùng chất liệu cao cấp mang lại sự thoải mái và phong cách."
        ],
        features: [
            "Công nghệ đệm Air Max",
            "Chất liệu da và lưới cao cấp",
            "Đế cao su chống trơn",
            "Phối màu thời thượng"
        ],
        price: "3.200.000 VND",
        image: "images/giày8.jpg",
        brand: "Nike"
    }
];