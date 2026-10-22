export interface SubjectData {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  topics: {
    id: string;
    title: string;
    grade: string;
    summary: string;
    keyPoints: string[];
  }[];
}

export const SUBJECTS: SubjectData[] = [
  {
    id: 'biology',
    name: 'Sinh học',
    icon: 'Leaf',
    color: 'emerald',
    description: 'Khám phá thế giới tế bào, cơ thể người, hệ sinh thái và di truyền học.',
    topics: [
      { id: 'bio_1', title: 'Tế bào - Đơn vị cơ sở của sự sống', grade: 'Lớp 6', summary: 'Cấu tạo tế bào nhân sơ và nhân thực, màng tế bào, chất tế bào và nhân.', keyPoints: ['Mọi sinh vật đều được cấu tạo từ tế bào', 'Tế bào động vật và tế bào thực vật có điểm gì khác nhau?', 'Quá trình phân chia tế bào giúp cơ thể lớn lên'] },
      { id: 'bio_2', title: 'Trao đổi chất và chuyển hóa năng lượng ở sinh vật', grade: 'Lớp 7', summary: 'Quang hợp ở thực vật, hô hấp tế bào và vai trò của nước đối với cơ thể sống.', keyPoints: ['Phương trình quang hợp: Nước + CO2 + Ánh sáng -> Glucose + O2', 'Hô hấp tế bào giải phóng năng lượng cho các hoạt động sống', 'Ảnh hưởng của nhiệt độ và ánh sáng đến quang hợp'] },
      { id: 'bio_3', title: 'Di truyền và Biến dị', grade: 'Lớp 9', summary: 'Quy luật Mendel, ADN, gen, nhiễm sắc thể và ứng dụng công nghệ sinh học.', keyPoints: ['ADN mang thông tin di truyền dưới dạng mã bộ ba', 'NST là cấu trúc mang gen nhân đôi và phân li', 'Đột biến gen và đột biến NST trong tự nhiên'] }
    ]
  },
  {
    id: 'physics',
    name: 'Vật lí',
    icon: 'Zap',
    color: 'sky',
    description: 'Nghiên cứu lực, chuyển động, năng lượng, nhiệt, ánh sáng, điện và từ học.',
    topics: [
      { id: 'phys_1', title: 'Tốc độ và Chuyển động', grade: 'Lớp 7', summary: 'Đo tốc độ, đồ thị quãng đường - thời gian, các yếu tố an toàn giao thông.', keyPoints: ['Công thức tính tốc độ: v = s / t', 'Đơn vị hợp pháp: m/s hoặc km/h', 'Ý nghĩa đồ thị quãng đường theo thời gian'] },
      { id: 'phys_2', title: 'Năng lượng và Công cơ học', grade: 'Lớp 8', summary: 'Động năng, thế năng, cơ năng và định luật bảo toàn cơ năng.', keyPoints: ['Thế năng hấp dẫn phụ thuộc vào khối lượng và độ cao', 'Động năng phụ thuộc vào khối lượng và tốc độ', 'Sự chuyển hóa giữa động năng và thế năng'] },
      { id: 'phys_3', title: 'Điện học và Mạch điện', grade: 'Lớp 9', summary: 'Định luật Ohm, đoạn mạch nối tiếp, song song, công suất điện và an toàn điện.', keyPoints: ['Cường độ dòng điện I = U / R', 'Đoạn mạch nối tiếp: I = I1 = I2, U = U1 + U2', 'Công suất tiêu thụ điện P = U * I'] }
    ]
  },
  {
    id: 'chemistry',
    name: 'Hóa học',
    icon: 'FlaskConical',
    color: 'violet',
    description: 'Tìm hiểu chất, nguyên tử, phân tử, phản ứng hóa học và dung dịch.',
    topics: [
      { id: 'chem_1', title: 'Chất và Sự biến đổi chất', grade: 'Lớp 8', summary: 'Tính chất vật lí và hóa học, hiện tượng hóa học, phản ứng hóa học.', keyPoints: ['Phân biệt hiện tượng vật lí và hiện tượng hóa học', 'Định luật bảo toàn khối lượng trong phản ứng', 'Cách lập phương trình hóa học và cân bằng hệ số'] },
      { id: 'chem_2', title: 'Oxygen và Không khí', grade: 'Lớp 7', summary: 'Tính chất của oxygen, sự cháy, sự oxi hóa và bảo vệ không khí trong lành.', keyPoints: ['Oxygen duy trì sự cháy và sự hô hấp', 'Thành phần không khí gồm 21% O2, 78% N2 và khí khác', 'Nguyên nhân và biện pháp chống ô nhiễm không khí'] },
      { id: 'chem_3', title: 'Acid - Base - pH - Muối', grade: 'Lớp 9', summary: 'Tính chất hóa học của acid, base, thang đo pH và phản ứng trung hòa.', keyPoints: ['Acid làm quỳ tím hóa đỏ, Base làm quỳ tím hóa xanh', 'Thang đo pH từ 0 đến 14 xác định độ chua/kiềm', 'Ứng dụng của muối trong đời sống và sản xuất'] }
    ]
  },
  {
    id: 'earth',
    name: 'Khoa học Trái Đất',
    icon: 'Globe',
    color: 'amber',
    description: 'Khám phá Trái Đất, bầu trời, thời tiết, khí hậu, tài nguyên và môi trường.',
    topics: [
      { id: 'earth_1', title: 'Trái Đất trong hệ Mặt Trời', grade: 'Lớp 6', summary: 'Hình dạng Trái Đất, chuyển động tự quay quanh trục và chuyển động quanh Mặt Trời.', keyPoints: ['Trái Đất tự quay quanh trục tạo ra ngày và đêm luân phiên', 'Chuyển động quanh Mặt Trời tạo ra các mùa trong năm', 'Các pha của Mặt Trăng và hiện tượng nhật thực, nguyệt thực'] },
      { id: 'earth_2', title: 'Lớp vỏ Trái Đất và Khoáng sản', grade: 'Lớp 6', summary: 'Cấu tạo Trái Đất, các mảng kiến tạo, động đất, núi lửa và khoáng sản.', keyPoints: ['Cấu tạo 3 lớp: Vỏ, Mantin và Nhân', 'Hiện tượng động đất và núi lửa do vận động kiến tạo', 'Tài nguyên khoáng sản và việc khai thác bền vững'] },
      { id: 'earth_3', title: 'Thời tiết và Khí hậu', grade: 'Lớp 7', summary: 'Các yếu tố khí tượng, nhiệt độ, độ ẩm, áp suất khí quyển và biến đổi khí hậu.', keyPoints: ['Sự khác biệt giữa thời tiết và khí hậu', 'Nguyên nhân và hệ quả của biến đổi khí hậu toàn cầu', 'Giải pháp bảo vệ tầng ozone và giảm phát thải'] }
    ]
  }
];

export const SCIENTISTS = [
  {
    id: 'biologist',
    name: 'Giáo sư Flora',
    title: 'Nhà Sinh học AI',
    specialty: 'Tế bào, Cơ thể người, Hệ sinh thái & Di truyền',
    avatar: '🌱',
    color: 'emerald',
    description: 'Chuyên gia giải thích các bí ẩn về sự sống từ tế bào vi mô đến hệ sinh thái rừng già vùng cao.'
  },
  {
    id: 'physicist',
    name: 'Giáo sư Newton',
    title: 'Nhà Vật lí AI',
    specialty: 'Lực, Chuyển động, Năng lượng & Điện học',
    avatar: '⚡',
    color: 'sky',
    description: 'Hướng dẫn học sinh chinh phục các định luật vật lí, giải bài tập định lượng và hiện tượng tự nhiên.'
  },
  {
    id: 'chemist',
    name: 'Tiến sĩ Alchem',
    title: 'Nhà Hóa học AI',
    specialty: 'Nguyên tử, Phản ứng hóa học, Acid & Base',
    avatar: '🧪',
    color: 'violet',
    description: 'Khám phá thế giới các chất, cân bằng phương trình và ứng dụng hóa học an toàn trong đời sống.'
  },
  {
    id: 'earth',
    name: 'Tiến sĩ Geo',
    title: 'Nhà Khoa học Trái Đất AI',
    specialty: 'Trái Đất, Thời tiết, Khí hậu & Môi trường',
    avatar: '🌍',
    color: 'amber',
    description: 'Nghiên cứu cấu tạo Trái Đất, khí tượng thủy văn, bảo vệ nguồn nước và phòng chống thiên tai.'
  }
];

export const MOCK_QUESTIONS_BANK = [
  {
    id: 'q_1',
    subject: 'Sinh học',
    grade: 'Lớp 8',
    topic: 'Hệ hô hấp ở người',
    difficulty: 'Trung bình',
    question: 'Cơ quan nào trong hệ hô hấp là nơi diễn ra sự trao đổi khí trực tiếp giữa cơ thể và môi trường ngoài?',
    options: ['A. Khí quản', 'B. Phế quản', 'C. Phế nang (Túi phổi)', 'D. Thanh quản'],
    correctIndex: 2,
    explanation: 'Phế nang có số lượng cực lớn (khoảng 300 triệu) được bao bọc bởi mạng lưới mạch máu dày đặc, là bề mặt trao đổi khí O2 và CO2.',
    status: 'Đã duyệt',
    creator: 'GV. Nguyễn Văn A'
  },
  {
    id: 'q_2',
    subject: 'Vật lí',
    grade: 'Lớp 7',
    topic: 'Tốc độ chuyển động',
    difficulty: 'Dễ',
    question: 'Một xe máy chuyển động với vận tốc 40 km/h trong thời gian 2 giờ. Quãng đường xe đi được là bao nhiêu?',
    options: ['A. 20 km', 'B. 40 km', 'C. 80 km', 'D. 160 km'],
    correctIndex: 2,
    explanation: 'Áp dụng công thức s = v * t = 40 km/h * 2 h = 80 km.',
    status: 'Đã duyệt',
    creator: 'GV. Trần Thị B'
  },
  {
    id: 'q_3',
    subject: 'Hóa học',
    grade: 'Lớp 8',
    topic: 'Phản ứng hóa học',
    difficulty: 'Khó',
    question: 'Đốt cháy hoàn toàn 4,8 gam magnesium (Mg) trong khí oxygen (O2) thu được magnesium oxide (MgO). Khối lượng MgO thu được là (cho Mg = 24, O = 16):',
    options: ['A. 8,0 gam', 'B. 10,0 gam', 'C. 6,0 gam', 'D. 4,0 gam'],
    correctIndex: 0,
    explanation: 'Phương trình: 2Mg + O2 -> 2MgO. Số mol Mg = 4,8 / 24 = 0,2 mol. Số mol MgO = 0,2 mol. Khối lượng MgO = 0,2 * 40 = 8,0 gam.',
    status: 'Đã duyệt',
    creator: 'GV. Lê Văn C'
  }
];
