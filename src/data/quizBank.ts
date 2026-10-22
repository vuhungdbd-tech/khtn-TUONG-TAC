export interface QuestionItem {
  id: string;
  subject: string; // 'Sinh học' | 'Vật lí' | 'Hóa học' | 'Khoa học Trái Đất'
  grade: string;   // '6' | '7' | '8' | '9'
  difficulty: 'Cơ bản' | 'Vận dụng' | 'Nâng cao' | 'Chuyên đề ôn HSG';
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const OLYMPIAD_QUIZ_BANK: QuestionItem[] = [
  // ==========================================
  // 1. SINH HỌC
  // ==========================================
  // Sinh học - Cơ bản
  {
    id: 'bio_cb_1',
    subject: 'Sinh học',
    grade: '6',
    difficulty: 'Cơ bản',
    topic: 'Tế bào - Đơn vị cơ sở của sự sống',
    question: 'Bào quan nào sau đây chỉ có ở tế bào thực vật mà không có ở tế bào động vật?',
    options: ['A. Màng sinh chất', 'B. Lục lạp và thành tế bào (cellulose)', 'C. Ti thể', 'D. Nhân tế bào'],
    correctIndex: 1,
    explanation: 'Lục lạp (chứa diệp lục để quang hợp) và thành tế bào bằng cellulose là hai cấu trúc đặc trưng có ở tế bào thực vật nhưng không có ở tế bào động vật.'
  },
  {
    id: 'bio_cb_2',
    subject: 'Sinh học',
    grade: '7',
    difficulty: 'Cơ bản',
    topic: 'Quang hợp và Hô hấp ở thực vật',
    question: 'Nguyên liệu của quá trình quang hợp ở thực vật gồm những chất nào sau đây?',
    options: ['A. Nước (H2O) và khí Carbon dioxide (CO2)', 'B. Khí Oxygen (O2) và Glucose', 'C. Tinh bột và Protein', 'D. Nước và khí Oxygen (O2)'],
    correctIndex: 0,
    explanation: 'Phương trình quang hợp: Nước + Carbon dioxide + Năng lượng ánh sáng -> Glucose + Oxygen.'
  },
  {
    id: 'bio_cb_3',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Hệ tuần hoàn ở người',
    question: 'Loại mạch máu nào có nhiệm vụ dẫn máu từ các cơ quan và tế bào quay trở về tim?',
    options: ['A. Động mạch', 'B. Mao mạch', 'C. Tĩnh mạch', 'D. Vòng tuần hoàn lớn'],
    correctIndex: 2,
    explanation: 'Động mạch dẫn máu từ tim đến các cơ quan, mao mạch là nơi trao đổi chất, và tĩnh mạch dẫn máu từ các cơ quan trở về tim.'
  },
  {
    id: 'bio_cb_4',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Cơ bản',
    topic: 'Di truyền học Mendel',
    question: 'Theo quy luật phân li của Mendel, khi lai hai cơ thể bố mẹ thuần chủng khác nhau về một cặp tính trạng tương phản thì F1 biểu hiện kiểu hình như thế nào?',
    options: ['A. 100% đồng tính mang tính trạng trội', 'B. 50% trội : 50% lặn', 'C. 75% trội : 25% lặn', 'D. Biểu hiện tính trạng trung gian'],
    correctIndex: 0,
    explanation: 'Định luật đồng tính F1 của Mendel: Lai hai dòng bố mẹ thuần chủng tương phản (AA x aa) cho thế hệ F1 100% dị hợp (Aa) mang kiểu hình của tính trạng trội.'
  },
  {
    id: 'bio_cb_5',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Hệ hô hấp ở người',
    question: 'Đơn vị cấu tạo và chức năng trao đổi khí nhỏ nhất trong phổi của người là gì?',
    options: ['A. Khí quản', 'B. Phế quản', 'C. Phế nang', 'D. Thanh quản'],
    correctIndex: 2,
    explanation: 'Phế nang là những túi khí nhỏ có mạng lưới mao mạch dày đặc, nơi diễn ra trực tiếp sự khuếch tán khí O2 và CO2 giữa không khí và máu.'
  },

  // Sinh học - Vận dụng
  {
    id: 'bio_vd_1',
    subject: 'Sinh học',
    grade: '6',
    difficulty: 'Vận dụng',
    topic: 'Sự lớn lên và phân chia tế bào',
    question: 'Một tế bào mẹ ban đầu trải qua 4 lần phân chia (nguyên phân) liên tiếp. Số tế bào con được tạo thành là bao nhiêu?',
    options: ['A. 8 tế bào', 'B. 16 tế bào', 'C. 32 tế bào', 'D. 64 tế bào'],
    correctIndex: 1,
    explanation: 'Số tế bào con tạo thành sau n lần phân chia từ 1 tế bào ban đầu là: 2^n = 2^4 = 16 tế bào.'
  },
  {
    id: 'bio_vd_2',
    subject: 'Sinh học',
    grade: '7',
    difficulty: 'Vận dụng',
    topic: 'Thoát hơi nước và trao đổi chất',
    question: 'Tại sao khi trồng cây vào những ngày nắng nóng gay gắt, người ta thường phải che chắn hoặc tỉa bớt lá cây con mới bứng trồng?',
    options: [
      'A. Để giảm sự thoát hơi nước qua lá khi rễ cây chưa kịp hút nước ổn định.',
      'B. Để cây không bị cháy lá do ánh sáng mạnh.',
      'C. Để kích thích cây ra hoa sớm hơn.',
      'D. Giúp cây hấp thụ nhiều khí carbonic hơn vào ban ngày.'
    ],
    correctIndex: 0,
    explanation: 'Cây con mới bứng hệ rễ bị tổn thương chưa hút đủ nước. Việc tỉa bớt lá hoặc che chắn giúp giảm thoát hơi nước qua khí khổng, tránh cho cây con bị héo úa và chết.'
  },
  {
    id: 'bio_vd_3',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Hệ tim mạch và huyết áp',
    question: 'Khi đo huyết áp một học sinh có chỉ số 115/75 mmHg. Ý nghĩa của con số 115 và 75 tương ứng là gì?',
    options: [
      'A. 115 là huyết áp tối đa (tâm thu), 75 là huyết áp tối thiểu (tâm trương).',
      'B. 115 là huyết áp tâm trương, 75 là huyết áp tâm thu.',
      'C. 115 là nhịp tim mỗi phút, 75 là lượng máu bơm trong 1 nhịp.',
      'D. 115 là nồng độ oxy, 75 là nồng độ CO2 trong máu.'
    ],
    correctIndex: 0,
    explanation: 'Chỉ số huyết áp gồm huyết áp tâm thu (huyết áp tối đa khi tâm thất co bóp, ~110-120 mmHg) và huyết áp tâm trương (huyết áp tối thiểu khi tâm thất giãn, ~70-80 mmHg).'
  },
  {
    id: 'bio_vd_4',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Vận dụng',
    topic: 'Di truyền học Mendel',
    question: 'Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với gen a quy định hạt xanh. Cho cây hạt vàng dị hợp (Aa) tự thụ phấn, tỉ lệ kiểu hình ở thế hệ con F1 là:',
    options: ['A. 100% hạt vàng', 'B. 3 hạt vàng : 1 hạt xanh', 'C. 1 hạt vàng : 1 hạt xanh', 'D. 9 vàng : 3 xanh : 3 nhăn : 1 trơn'],
    correctIndex: 1,
    explanation: 'Phép lai Aa x Aa cho tỉ lệ kiểu gen: 1 AA : 2 Aa : 1 aa. Do A trội hoàn toàn nên kiểu hình là (1+2) = 3 hạt vàng : 1 hạt xanh (75% vàng : 25% xanh).'
  },
  {
    id: 'bio_vd_5',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Tiêu hóa ở người',
    question: 'Ở khoang miệng, enzym amylase trong nước bọt có khả năng biến đổi hóa học chất dinh dưỡng nào sau đây?',
    options: ['A. Tinh bột chín thành đường maltose', 'B. Protein thành amino acid', 'C. Lipid thành glycerol và acid béo', 'D. Vitamin và muối khoáng'],
    correctIndex: 0,
    explanation: 'Enzym amylase trong nước bọt thủy phân tinh bột chín thành đường đôi maltose ở môi trường kiềm nhẹ (pH ~ 7.2).'
  },

  // Sinh học - Nâng cao
  {
    id: 'bio_nc_1',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Nâng cao',
    topic: 'Điều hòa cân bằng nội môi & Vận động',
    question: 'Khi một vận động viên thi đấu chạy cự li dài, nhịp hô hấp và nhịp tim tăng mạnh. Cơ chế thần kinh - thể dịch nào kích thích trung khu hô hấp ở hành não hoạt động mạnh nhất?',
    options: [
      'A. Nồng độ CO2 trong máu tăng cao và pH máu giảm kích thích thụ thể hóa học.',
      'B. Nồng độ O2 trong máu tăng kích thích trung khu hô hấp.',
      'C. Nhiệt độ cơ thể giảm làm co mạch ngoại vi.',
      'D. Lượng nước tiểu tăng làm giảm áp suất thẩm thấu.'
    ],
    correctIndex: 0,
    explanation: 'Khi vận động mạnh, tế bào cơ hô hấp mạnh thải nhiều CO2 vào máu tạo acid carbonic (H2CO3) làm pH máu giảm. Nồng độ ion H+ và pCO2 tăng kích thích xoang động mạch cảnh và cung động mạch chủ truyền xung kích thích trung khu hô hấp ở hành tủy.'
  },
  {
    id: 'bio_nc_2',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Đột biến gen & Nhiễm sắc thể',
    question: 'Một gen có chiều dài 4080 Ångström (Å) và có số liên kết hydro là 3120. Số nucleotide loại Adenine (A) và Guanine (G) của gen này lần lượt là:',
    options: ['A. A = T = 480; G = X = 720', 'B. A = T = 720; G = X = 480', 'C. A = T = 600; G = X = 600', 'D. A = T = 360; G = X = 840'],
    correctIndex: 0,
    explanation: 'Tổng số nu N = (4080 / 3.4) * 2 = 2400 nu. Ta có hệ: 2A + 2G = 2400 và 2A + 3G = 3120 liên kết hydro. Trừ hai vế suy ra G = 3120 - 2400 = 720 nu. Suy ra A = (2400 - 2*720)/2 = 480 nu.'
  },
  {
    id: 'bio_nc_3',
    subject: 'Sinh học',
    grade: '7',
    difficulty: 'Nâng cao',
    topic: 'Quang hợp và Cân bằng năng lượng',
    question: 'Để chứng minh tinh bột được tạo thành trong quá trình quang hợp của lá cây, bước nhúng lá vào cồn đun cách thủy nhằm mục đích gì trước khi nhỏ dung dịch iodine?',
    options: [
      'A. Để hòa tan và tẩy sạch chất diệp lục, giúp quan sát rõ sự chuyển màu xanh tím của tinh bột.',
      'B. Để tiêu diệt vi khuẩn bám trên bề mặt lá.',
      'C. Để kích thích tinh bột phản ứng nhanh hơn với cồn.',
      'D. Nhằm làm mềm thành tế bào thực vật để iodine dễ thấm vào.'
    ],
    correctIndex: 0,
    explanation: 'Chất diệp lục có màu xanh lục sẽ che lấp màu phản ứng đặc trưng giữa tinh bột và iodine (xanh tím). Vì diệp lục tan trong cồn nóng nên đun cách thủy trong cồn sẽ tẩy sạch màu xanh của lá.'
  },
  {
    id: 'bio_nc_4',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Sinh thái học và Chuỗi thức ăn',
    question: 'Trong một hệ sinh thái rừng nhiệt đới, nếu loài chim ăn sâu bị suy giảm mạnh số lượng do săn bắt, chuỗi biến đổi sinh thái nào sau đây có khả năng xảy ra nhất?',
    options: [
      'A. Số lượng sâu ăn lá tăng mạnh -> Năng suất cây rừng suy giảm -> Động vật ăn thực vật bị thiếu thức ăn.',
      'B. Số lượng cây rừng tăng trưởng nhanh chóng do không bị sâu ăn.',
      'C. Số lượng các loài thú ăn thịt lớn lập tức tăng gấp đôi.',
      'D. Chu trình tuần hoàn nước trong khu rừng bị ngưng trệ hoàn toàn.'
    ],
    correctIndex: 0,
    explanation: 'Chim ăn sâu là mắt xích kiểm soát số lượng côn trùng ăn thực vật. Khi chim giảm số lượng, sâu bọ bùng phát làm hại lá cây rừng, ảnh hưởng đến bậc dinh dưỡng sản xuất của cả hệ sinh thái.'
  },

  // Sinh học - Chuyên đề ôn HSG
  {
    id: 'bio_hsg_1',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Di truyền phả hệ & Đột biến',
    question: 'Trong một phả hệ người, bệnh mù màu do gen lặn b nằm trên vùng không tương đồng của NST X quy định (Xb), gen B quy định mắt bình thường. Bố mắt bình thường, mẹ bình thường có bố mẹ đẻ bình thường nhưng có em trai bị mù màu. Xác suất để cặp vợ chồng này sinh đứa con đầu lòng bị bệnh mù màu là bao nhiêu?',
    options: ['A. 1/8 (12,5%)', 'B. 1/4 (25%)', 'C. 1/2 (50%)', 'D. 1/16 (6,25%)'],
    correctIndex: 0,
    explanation: 'Bố bình thường có kiểu gen X^B Y. Mẹ có em trai bị bệnh (X^b Y) nên bà ngoại mẹ mang gen dị hợp X^B X^b, do đó xác suất mẹ mang gen bệnh X^B X^b là 1/2. Khi mẹ mang gen dị hợp, xác suất sinh con bị bệnh (chỉ có con trai X^b Y) là 1/4. Vậy xác suất chung = 1/2 * 1/4 = 1/8 (12,5%).'
  },
  {
    id: 'bio_hsg_2',
    subject: 'Sinh học',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Cân bằng nội môi & Thận học',
    question: 'Khi lượng nước trong cơ thể giảm (mất mồ hôi, tiêu chảy), thụ thể áp suất thẩm thấu ở vùng dưới đồi truyền tín hiệu đến tuyến yên tiết hormone ADH (vasopressin). Cơ chế tác dụng của hormone ADH tại ống lượn xa và ống góp của thận là gì?',
    options: [
      'A. Tăng cường tái hấp thu nước trở lại máu, làm nước tiểu cô đặc và giảm lượng bài xuất.',
      'B. Ức chế tái hấp thu nước, làm tăng lượng nước tiểu bài xuất.',
      'C. Tăng bài tiết muối NaCl vào nước tiểu để giảm áp suất thẩm thấu máu.',
      'D. Giảm lưu lượng lọc của cầu thận về mức bằng 0.'
    ],
    correctIndex: 0,
    explanation: 'Hormone ADH gắn vào thụ thể ở tế bào biểu mô ống góp, kích hoạt các kênh dẫn nước aquaporin-2 giúp tăng cường tái hấp thu nước trở lại mao mạch quanh ống thận, duy trì thể tích máu và huyết áp.'
  },
  {
    id: 'bio_hsg_3',
    subject: 'Sinh học',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Sinh học phân tử & Quy luật di truyền',
    question: 'Một phân tử ADN mạch kép nhân đôi liên tiếp 5 lần trong môi trường chứa toàn bộ nucleotide tự do mang đồng vị phóng xạ N15. Ban đầu phân tử ADN mang N14. Số phân tử ADN con sau 5 lần nhân đôi chỉ chứa toàn N15 là bao nhiêu?',
    options: ['A. 30 phân tử', 'B. 32 phân tử', 'C. 16 phân tử', 'D. 2 phân tử'],
    correctIndex: 0,
    explanation: 'Tổng số ADN tạo ra sau 5 lần nhân đôi là 2^5 = 32 phân tử. Theo nguyên tắc bán bảo tồn, luôn có 2 phân tử ADN lai (chứa 1 mạch gốc N14 và 1 mạch mới N15). Vậy số phân tử ADN chỉ chứa hoàn toàn N15 là: 32 - 2 = 30 phân tử.'
  },
  {
    id: 'bio_hsg_4',
    subject: 'Sinh học',
    grade: '7',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Sinh lí thực vật & Động học tế bào',
    question: 'Hiện tượng ứ giọt ở mép lá cây thường chỉ quan sát thấy ở những loài thực vật bụi thấp vào những buổi sáng sớm có độ ẩm không khí bão hòa. Lực động học chính thúc đẩy hiện tượng này là gì?',
    options: [
      'A. Áp suất rễ (lực đẩy của rễ) khi thoát hơi nước bị ngưng trệ do độ ẩm không khí quá cao.',
      'B. Lực kéo của sự thoát hơi nước mạnh mẽ ở mặt trên lá.',
      'C. Lực liên kết giữa các phân tử nước trong mạch rây.',
      'D. Hiện tượng thẩm thấu thụ động của khí carbonic qua lỗ khí.'
    ],
    correctIndex: 0,
    explanation: 'Đêm và sáng sớm không có ánh sáng và độ ẩm bão hòa (100%), khí khổng đóng hoặc không thoát hơi nước. Lúc này rễ vẫn tích cực hút nước và khoáng tạo ra áp suất rễ đẩy nước theo mạch gỗ lên ngọn lá ép nước trào ra ở mép phiến lá thành các giọt nước.'
  },

  // ==========================================
  // 2. VẬT LÍ
  // ==========================================
  // Vật lí - Cơ bản
  {
    id: 'phy_cb_1',
    subject: 'Vật lí',
    grade: '6',
    difficulty: 'Cơ bản',
    topic: 'Đo lường & Lực cơ học',
    question: 'Đơn vị đo lực hợp pháp trong hệ thống đo lường quốc tế (SI) là gì?',
    options: ['A. Newton (N)', 'B. Kilogram (kg)', 'C. Pascal (Pa)', 'D. Joule (J)'],
    correctIndex: 0,
    explanation: 'Đơn vị đo lực là Newton, kí hiệu là N, được đặt theo tên nhà bác học Isaac Newton.'
  },
  {
    id: 'phy_cb_2',
    subject: 'Vật lí',
    grade: '7',
    difficulty: 'Cơ bản',
    topic: 'Tốc độ chuyển động',
    question: 'Một bạn học sinh đi xe đạp từ nhà đến trường trên quãng đường dài 3 km hết thời gian 15 phút. Tốc độ trung bình của bạn học sinh là bao nhiêu?',
    options: ['A. 12 km/h', 'B. 10 km/h', 'C. 15 km/h', 'D. 20 km/h'],
    correctIndex: 0,
    explanation: 'Đổi 15 phút = 0,25 giờ. Tốc độ v = s / t = 3 km / 0,25 h = 12 km/h.'
  },
  {
    id: 'phy_cb_3',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Áp suất chất lỏng',
    question: 'Áp suất chất lỏng tác dụng lên một điểm ở độ sâu h tính theo công thức nào (với d là trọng lượng riêng của chất lỏng)?',
    options: ['A. p = d * h', 'B. p = d / h', 'C. p = h / d', 'D. p = d * h^2'],
    correctIndex: 0,
    explanation: 'Công thức tính áp suất chất lỏng đứng yên ở độ sâu h là p = d * h, trong đó d là trọng lượng riêng của chất lỏng (N/m3), h là độ sâu (m).'
  },
  {
    id: 'phy_cb_4',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Cơ bản',
    topic: 'Định luật Ohm',
    question: 'Theo định luật Ohm, cường độ dòng điện chạy qua một dây dẫn có điện trở R dưới hiệu điện thế U được xác định bởi công thức nào?',
    options: ['A. I = U / R', 'B. I = U * R', 'C. I = R / U', 'D. I = U^2 / R'],
    correctIndex: 0,
    explanation: 'Định luật Ohm: Cường độ dòng điện I tỉ lệ thuận với hiệu điện thế U và tỉ lệ nghịch với điện trở R: I = U / R.'
  },
  {
    id: 'phy_cb_5',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Công cơ học',
    question: 'Dấu hiệu nào khẳng định có công cơ học được thực hiện?',
    options: [
      'A. Có lực tác dụng vào vật và làm vật dịch chuyển quãng đường theo hướng của lực.',
      'B. Chỉ cần có lực tác dụng rất lớn giữ vật đứng yên.',
      'C. Vật có khối lượng lớn đặt trên mặt bàn phẳng.',
      'D. Người dùng hết sức đẩy bức tường bê tông nhưng tường không nhúc nhích.'
    ],
    correctIndex: 0,
    explanation: 'Công cơ học chỉ xuất hiện khi hội đủ 2 điều kiện: Có lực F tác dụng vào vật và vật phải dịch chuyển một quãng đường s theo phương của lực (A = F * s).'
  },

  // Vật lí - Vận dụng
  {
    id: 'phy_vd_1',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Lực đẩy Archimedes & Sự nổi',
    question: 'Một vật có thể tích 0,002 m3 được nhúng chìm hoàn toàn trong nước có trọng lượng riêng d = 10000 N/m3. Lực đẩy Archimedes tác dụng lên vật có độ lớn là:',
    options: ['A. 20 N', 'B. 200 N', 'C. 2 N', 'D. 50 N'],
    correctIndex: 0,
    explanation: 'Lực đẩy Archimedes Fa = d * V = 10000 N/m3 * 0,002 m3 = 20 N.'
  },
  {
    id: 'phy_vd_2',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Áp lực và Áp suất chất rắn',
    question: 'Một người đứng bằng hai chân trên sàn nhà. Trọng lượng của người là 600 N, diện tích tiếp xúc của mỗi bàn chân với mặt sàn là 0,015 m2. Áp suất người đó tác dụng lên sàn là:',
    options: ['A. 20000 Pa', 'B. 40000 Pa', 'C. 10000 Pa', 'D. 30000 Pa'],
    correctIndex: 0,
    explanation: 'Diện tích tiếp xúc của hai bàn chân là S = 2 * 0,015 = 0,03 m2. Áp suất p = F / S = 600 / 0,03 = 20000 Pa (N/m2).'
  },
  {
    id: 'phy_vd_3',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Vận dụng',
    topic: 'Đoạn mạch nối tiếp và song song',
    question: 'Cho hai điện trở R1 = 20 Ω và R2 = 30 Ω mắc song song vào nguồn điện có hiệu điện thế U = 12 V. Cường độ dòng điện trong mạch chính là:',
    options: ['A. 1,0 A', 'B. 0,24 A', 'C. 2,5 A', 'D. 0,6 A'],
    correctIndex: 0,
    explanation: 'Điện trở tương đương của mạch song song: Rtd = (R1 * R2) / (R1 + R2) = (20 * 30) / (20 + 30) = 600 / 50 = 12 Ω. Cường độ mạch chính I = U / Rtd = 12 V / 12 Ω = 1,0 A.'
  },
  {
    id: 'phy_vd_4',
    subject: 'Vật lí',
    grade: '7',
    difficulty: 'Vận dụng',
    topic: 'Âm học & Tốc độ truyền âm',
    question: 'Một người đứng trước vách đá phát ra một tiếng la lớn và nghe thấy tiếng vang sau đó 0,4 giây. Biết tốc độ truyền âm trong không khí là 340 m/s. Khoảng cách từ người đó đến vách đá là:',
    options: ['A. 68 m', 'B. 136 m', 'C. 34 m', 'D. 85 m'],
    correctIndex: 0,
    explanation: 'Âm thanh truyền từ người tới vách đá rồi phản xạ ngược lại, quãng đường đi là 2s. Ta có 2s = v * t = 340 * 0,4 = 136 m -> Khoảng cách s = 136 / 2 = 68 m.'
  },
  {
    id: 'phy_vd_5',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Công suất động cơ',
    question: 'Một cần cẩu nâng một khối hàng có trọng lượng 4000 N lên cao 6 m trong thời gian 12 giây. Công suất nâng của cần cẩu là bao nhiêu?',
    options: ['A. 2000 W', 'B. 4800 W', 'C. 1200 W', 'D. 24000 W'],
    correctIndex: 0,
    explanation: 'Công thực hiện A = F * s = 4000 * 6 = 24000 J. Công suất P = A / t = 24000 J / 12 s = 2000 W (Watt).'
  },

  // Vật lí - Nâng cao
  {
    id: 'phy_nc_1',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Nâng cao',
    topic: 'Chuyển động cơ học tương đối',
    question: 'Hai ô tô cùng khởi hành từ hai điểm A và B cách nhau 120 km đi ngược chiều nhau. Ô tô thứ nhất đi từ A với vận tốc 40 km/h, ô tô thứ hai đi từ B với vận tốc 60 km/h. Sau bao lâu kể từ lúc khởi hành thì hai xe gặp nhau?',
    options: ['A. 1,2 giờ (1 giờ 12 phút)', 'B. 1,5 giờ', 'C. 2,0 giờ', 'D. 0,8 giờ'],
    correctIndex: 0,
    explanation: 'Khi đi ngược chiều nhau, vận tốc tương đối giữa 2 xe là v1 + v2 = 40 + 60 = 100 km/h. Thời gian để gặp nhau t = s / (v1 + v2) = 120 / 100 = 1,2 giờ (tương đương 1 giờ 12 phút).'
  },
  {
    id: 'phy_nc_2',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Nâng cao',
    topic: 'Phương trình cân bằng nhiệt',
    question: 'Trộn 2 kg nước ở nhiệt độ 20°C với 3 kg nước ở nhiệt độ 70°C trong bình cách nhiệt hoàn hảo. Bỏ qua nhiệt dung của bình, nhiệt độ cân bằng của hỗn hợp nước là bao nhiêu?',
    options: ['A. 50°C', 'B. 45°C', 'C. 55°C', 'D. 40°C'],
    correctIndex: 0,
    explanation: 'Nhiệt lượng tỏa ra bằng nhiệt lượng thu vào: m1 * c * (tcb - 20) = m2 * c * (70 - tcb) -> 2 * (tcb - 20) = 3 * (70 - tcb) -> 5 tcb = 210 + 40 = 250 -> tcb = 50°C.'
  },
  {
    id: 'phy_nc_3',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Quang hình học: Thấu kính hội tụ',
    question: 'Đặt một vật sáng AB vuông góc với trục chính của một thấu kính hội tụ có tiêu cự f = 15 cm. Vật cách thấu kính d = 30 cm (d = 2f). Đặc điểm của ảnh A\'B\' thu được là gì?',
    options: [
      'A. Ảnh thật, ngược chiều với vật và có chiều cao bằng đúng chiều cao của vật.',
      'B. Ảnh ảo, cùng chiều và lớn hơn vật.',
      'C. Ảnh thật, cùng chiều và nhỏ hơn vật.',
      'D. Ảnh thật, ngược chiều và lớn gấp đôi vật.'
    ],
    correctIndex: 0,
    explanation: 'Khi đặt vật ở vị trí đúng bằng hai lần tiêu cự (d = 2f) của thấu kính hội tụ, ta luôn thu được ảnh thật, ngược chiều, cách thấu kính d\' = 2f và có độ lớn đúng bằng vật.'
  },
  {
    id: 'phy_nc_4',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Điện từ học & Máy biến áp',
    question: 'Một máy biến thế có cuộn sơ cấp gồm 2200 vòng và cuộn thứ cấp gồm 110 vòng. Khi đặt vào hai đầu cuộn sơ cấp một hiệu điện thế xoay chiều 220 V thì hiệu điện thế ở hai đầu cuộn thứ cấp để hở là:',
    options: ['A. 11 V', 'B. 22 V', 'C. 44 V', 'D. 110 V'],
    correctIndex: 0,
    explanation: 'Hệ thức máy biến thế: U1 / U2 = N1 / N2 -> 220 / U2 = 2200 / 110 = 20 -> U2 = 220 / 20 = 11 V (Đây là máy hạ áp).'
  },

  // Vật lí - Chuyên đề ôn HSG
  {
    id: 'phy_hsg_1',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Cơ học thủy tĩnh & Bình thông nhau',
    question: 'Một bình thông nhau gồm hai nhánh hình trụ tiết diện S1 = 20 cm2 và S2 = 10 cm2 chứa nước (trọng lượng riêng d1 = 10000 N/m3). Đổ vào nhánh lớn một cột dầu có trọng lượng riêng d2 = 8000 N/m3 với chiều cao h2 = 15 cm. Độ chênh lệch mực nước ở hai nhánh sau khi cân bằng là:',
    options: ['A. 12 cm', 'B. 15 cm', 'C. 8 cm', 'D. 10 cm'],
    correctIndex: 0,
    explanation: 'Chọn mặt phân cách giữa dầu và nước ở nhánh lớn làm mặt chuẩn: p_nhánh_lớn = p_nhánh_nhỏ -> d2 * h2 = d1 * h_chênh -> 8000 * 15 = 10000 * h_chênh -> h_chênh = 12 cm (không phụ thuộc vào tiết diện các nhánh).'
  },
  {
    id: 'phy_hsg_2',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Mạch cầu điện trở Wheastone',
    question: 'Cho mạch cầu gồm 4 điện trở R1, R2, R3, R4 mắc theo thứ tự tạo thành cầu, ở nhánh giữa có điện kế G nối giữa hai nút C và D. Điều kiện để mạch cầu cân bằng (dòng điện qua điện kế G bằng 0, IG = 0) là gì?',
    options: ['A. R1 * R4 = R2 * R3', 'B. R1 * R2 = R3 * R4', 'C. R1 + R4 = R2 + R3', 'D. R1 / R4 = R3 / R2'],
    correctIndex: 0,
    explanation: 'Để điện thế tại C bằng điện thế tại D (UC = UD), tỉ số hiệu điện thế: U1/U2 = U3/U4 -> (I1*R1)/(I2*R2) = (I3*R3)/(I4*R4) -> R1/R2 = R3/R4 hay tích chéo R1 * R4 = R2 * R3.'
  },
  {
    id: 'phy_hsg_3',
    subject: 'Vật lí',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Sự nổi & Cân bằng Archimedes',
    question: 'Một khối gỗ hình lập phương cạnh a = 10 cm có khối lượng riêng D = 800 kg/m3 được thả vào một chậu nước (Dnước = 1000 kg/m3). Đặt thêm lên mặt trên của khối gỗ một vật nhỏ có khối lượng m để khối gỗ vừa chìm ngập hoàn toàn trong nước. Giá trị của m là:',
    options: ['A. 0,2 kg (200 g)', 'B. 0,8 kg', 'C. 0,5 kg', 'D. 1,0 kg'],
    correctIndex: 0,
    explanation: 'Thể tích khối gỗ V = 0,1^3 = 0,001 m3. Khối lượng khối gỗ m_gỗ = D * V = 800 * 0,001 = 0,8 kg. Khi ngập hoàn toàn, lực đẩy Fa = Dnước * 10 * V = 1000 * 10 * 0,001 = 10 N. Trọng lượng tổng cộng P = Fa -> (m_gỗ + m) * 10 = 10 -> m_gỗ + m = 1 kg -> m = 1 - 0,8 = 0,2 kg (200 g).'
  },
  {
    id: 'phy_hsg_4',
    subject: 'Vật lí',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Công suất cực đại trên biến trở',
    question: 'Một nguồn điện có hiệu điện thế không đổi U = 12 V và điện trở trong r = 4 Ω mắc nối tiếp với một biến trở Rx. Để công suất tiêu thụ trên biến trở Rx đạt giá trị lớn nhất thì giá trị của Rx và công suất cực đại Pmax tương ứng là:',
    options: ['A. Rx = 4 Ω; Pmax = 9 W', 'B. Rx = 2 Ω; Pmax = 18 W', 'C. Rx = 8 Ω; Pmax = 12 W', 'D. Rx = 4 Ω; Pmax = 36 W'],
    correctIndex: 0,
    explanation: 'Công suất P = I^2 * Rx = (U / (Rx + r))^2 * Rx = U^2 / (sqrt(Rx) + r/sqrt(Rx))^2. Theo bất đẳng thức Cauchy, mẫu số nhỏ nhất khi sqrt(Rx) = r/sqrt(Rx) -> Rx = r = 4 Ω. Khi đó Pmax = U^2 / (4*r) = 12^2 / (4 * 4) = 144 / 16 = 9 W.'
  },

  // ==========================================
  // 3. HÓA HỌC
  // ==========================================
  // Hóa học - Cơ bản
  {
    id: 'chm_cb_1',
    subject: 'Hóa học',
    grade: '7',
    difficulty: 'Cơ bản',
    topic: 'Nguyên tử & Nguyên tố hóa học',
    question: 'Hạt mang điện tích dương nằm trong hạt nhân nguyên tử là loại hạt nào?',
    options: ['A. Proton', 'B. Electron', 'C. Neutron', 'D. Phân tử'],
    correctIndex: 0,
    explanation: 'Nguyên tử gồm hạt nhân mang điện tích dương (gồm proton mang điện dương và neutron không mang điện) cùng lớp vỏ gồm các electron mang điện âm.'
  },
  {
    id: 'chm_cb_2',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Hiện tượng vật lí và Hiện tượng hóa học',
    question: 'Dấu hiệu cơ bản và quyết định nhất để phân biệt hiện tượng hóa học với hiện tượng vật lí là gì?',
    options: [
      'A. Có sự tạo thành chất mới có tính chất khác chất ban đầu.',
      'B. Có sự thay đổi trạng thái từ rắn sang lỏng hoặc khí.',
      'C. Có sự thay đổi về kích thước hoặc hình dạng của vật thể.',
      'D. Có sự tỏa nhiệt hoặc thu nhiệt nhẹ.'
    ],
    correctIndex: 0,
    explanation: 'Hiện tượng hóa học là hiện tượng chất bị biến đổi có tạo ra chất mới, trong khi hiện tượng vật lí chất chỉ biến đổi về trạng thái, hình dạng mà vẫn giữ nguyên bản chất.'
  },
  {
    id: 'chm_cb_3',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Khái niệm Mol & Khối lượng mol',
    question: 'Khối lượng mol phân tử của khí Carbon dioxide (CO2) là bao nhiêu (biết nguyên tử khối C = 12, O = 16)?',
    options: ['A. 44 g/mol', 'B. 28 g/mol', 'C. 32 g/mol', 'D. 16 g/mol'],
    correctIndex: 0,
    explanation: 'Khối lượng mol M(CO2) = 12 + 16 * 2 = 12 + 32 = 44 g/mol.'
  },
  {
    id: 'chm_cb_4',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Cơ bản',
    topic: 'Acid - Base - Muối',
    question: 'Dung dịch acid (như HCl, H2SO4) làm giấy quỳ tím chuyển sang màu gì?',
    options: ['A. Màu đỏ', 'B. Màu xanh', 'C. Không đổi màu', 'D. Màu tím than'],
    correctIndex: 0,
    explanation: 'Dung dịch acid làm quỳ tím hóa đỏ; dung dịch base làm quỳ tím hóa xanh.'
  },
  {
    id: 'chm_cb_5',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Định luật bảo toàn khối lượng',
    question: 'Trong một phản ứng hóa học: Chất tham gia A + Chất tham gia B -> Sản phẩm C + Sản phẩm D. Hệ thức bảo toàn khối lượng nào sau đây đúng?',
    options: ['A. mA + mB = mC + mD', 'B. mA + mC = mB + mD', 'C. mA * mB = mC * mD', 'D. mA + mB > mC + mD'],
    correctIndex: 0,
    explanation: 'Định luật bảo toàn khối lượng: Tổng khối lượng các chất tham gia phản ứng luôn bằng tổng khối lượng các sản phẩm tạo thành: mA + mB = mC + mD.'
  },

  // Hóa học - Vận dụng
  {
    id: 'chm_vd_1',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Cân bằng phương trình hóa học',
    question: 'Hệ số tối giản lần lượt để cân bằng phương trình hóa học: Al + O2 -> Al2O3 là:',
    options: ['A. 4, 3, 2', 'B. 2, 3, 1', 'C. 3, 2, 2', 'D. 1, 1, 1'],
    correctIndex: 0,
    explanation: 'Phương trình hóa học cân bằng: 4Al + 3O2 -> 2Al2O3 (4 nguyên tử Al ở hai vế, 6 nguyên tử O ở hai vế).'
  },
  {
    id: 'chm_vd_2',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Tính toán theo phương trình hóa học',
    question: 'Đốt cháy hoàn toàn 2,4 gam kim loại Magnesium (Mg) trong khí oxygen dư thu được Magnesium oxide (MgO). Khối lượng MgO thu được là (Mg = 24, O = 16):',
    options: ['A. 4,0 gam', 'B. 3,2 gam', 'C. 5,6 gam', 'D. 4,8 gam'],
    correctIndex: 0,
    explanation: 'Phương trình: 2Mg + O2 -> 2MgO. Số mol Mg = 2,4 / 24 = 0,1 mol. Theo PTHH, n(MgO) = n(Mg) = 0,1 mol. Khối lượng MgO = 0,1 * (24 + 16) = 0,1 * 40 = 4,0 gam.'
  },
  {
    id: 'chm_vd_3',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Nồng độ dung dịch',
    question: 'Hòa tan 20 gam muối ăn (NaCl) vào 80 gam nước cất. Nồng độ phần trăm (C%) của dung dịch thu được là:',
    options: ['A. 20%', 'B. 25%', 'C. 15%', 'D. 10%'],
    correctIndex: 0,
    explanation: 'Khối lượng dung dịch = m_chất_tan + m_dung_môi = 20 + 80 = 100 gam. Nồng độ C% = (20 / 100) * 100% = 20%.'
  },
  {
    id: 'chm_vd_4',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Vận dụng',
    topic: 'Dãy hoạt động hóa học của kim loại',
    question: 'Cho một lá kẽm (Zn) vào dung dịch đồng(II) sunfat (CuSO4). Hiện tượng quan sát được là gì?',
    options: [
      'A. Kim loại màu đỏ (Cu) bám ngoài lá kẽm, màu xanh của dung dịch CuSO4 nhạt dần.',
      'B. Không có hiện tượng gì xảy ra vì Cu mạnh hơn Zn.',
      'C. Xuất hiện sủi bọt khí không màu bốc lên mãnh liệt.',
      'D. Dung dịch chuyển sang màu đỏ sẫm kết tủa.'
    ],
    correctIndex: 0,
    explanation: 'Zn đứng trước Cu trong dãy hoạt động hóa học nên Zn đẩy Cu ra khỏi muối: Zn + CuSO4 -> ZnSO4 + Cu. Cu màu đỏ bám lên Zn và ion Cu2+ màu xanh giảm dần.'
  },
  {
    id: 'chm_vd_5',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Vận dụng',
    topic: 'Hóa học hữu cơ: Hydrocarbon',
    question: 'Khí gas dùng để đun nấu hàng ngày trong gia đình chứa thành phần chính là hỗn hợp của hai khí hydrocarbon nào sau đây?',
    options: ['A. Propane (C3H8) và Butane (C4H10)', 'B. Methane (CH4) và Ethylene (C2H4)', 'C. Acetylene (C2H2) và Benzene', 'D. Carbon monoxide (CO) và Hydrogen'],
    correctIndex: 0,
    explanation: 'Khí dầu mỏ hóa lỏng (LPG - liquefied petroleum gas) nén trong bình gas dân dụng gồm propane (C3H8) và butane (C4H10).'
  },

  // Hóa học - Nâng cao
  {
    id: 'chm_nc_1',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Nâng cao',
    topic: 'Bài toán chất dư - chất hết',
    question: 'Cho 5,6 gam sắt (Fe) phản ứng với dung dịch chứa 10,95 gam axit clohiđric (HCl). Thể tích khí H2 thu được ở điều kiện tiêu chuẩn (hoặc đktc 22,4 lít) là (Fe = 56, H = 1, Cl = 35,5):',
    options: ['A. 2,24 lít', 'B. 3,36 lít', 'C. 1,12 lít', 'D. 4,48 lít'],
    correctIndex: 0,
    explanation: 'PTHH: Fe + 2HCl -> FeCl2 + H2. Số mol Fe = 5,6 / 56 = 0,1 mol; n(HCl) = 10,95 / 36,5 = 0,3 mol. Tỉ lệ: 0,1 / 1 < 0,3 / 2 (0,1 < 0,15) -> HCl dư, Fe hết. Số mol H2 = n(Fe) = 0,1 mol. V(H2) = 0,1 * 22,4 = 2,24 lít.'
  },
  {
    id: 'chm_nc_2',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Hỗn hợp kim loại tác dụng với acid',
    question: 'Hòa tan hoàn toàn 7,8 gam hỗn hợp gồm Al và Mg vào dung dịch H2SO4 loãng dư, sau phản ứng thu được 8,96 lít khí H2 (đktc). Phần trăm khối lượng của Al trong hỗn hợp ban đầu là (Al = 27, Mg = 24):',
    options: ['A. 69,23%', 'B. 30,77%', 'C. 50,00%', 'D. 45,50%'],
    correctIndex: 0,
    explanation: 'Gọi x, y lần lượt là số mol Al và Mg. Ta có: 27x + 24y = 7,8. Số mol H2 = 8,96 / 22,4 = 0,4 mol. Theo bảo toàn e: 1,5x + y = 0,4. Giải hệ: x = 0,2 mol; y = 0,1 mol. Khối lượng Al = 0,2 * 27 = 5,4 gam. %m(Al) = (5,4 / 7,8) * 100% = 69,23%.'
  },
  {
    id: 'chm_nc_3',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Phản ứng trung hòa & pH',
    question: 'Trộn 100 ml dung dịch HCl 0,2M với 100 ml dung dịch NaOH 0,1M. Dung dịch sau phản ứng có môi trường gì và giá trị pH xấp xỉ bao nhiêu?',
    options: [
      'A. Môi trường acid, pH ≈ 1,3',
      'B. Môi trường trung tính, pH = 7',
      'C. Môi trường base, pH ≈ 12,7',
      'D. Môi trường lưỡng tính'
    ],
    correctIndex: 0,
    explanation: 'n(H+) = 0,1 * 0,2 = 0,02 mol; n(OH-) = 0,1 * 0,1 = 0,01 mol. H+ dư = 0,02 - 0,01 = 0,01 mol trong V_tổng = 200 ml = 0,2 L. Nồng độ [H+] = 0,01 / 0,2 = 0,05 M -> pH = -log(0,05) ≈ 1,3 (môi trường acid).'
  },
  {
    id: 'chm_nc_4',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Độ tan & Kết tinh muối',
    question: 'Ở 20°C, độ tan của muối ăn NaCl trong nước là 36 gam / 100 gam nước. Khối lượng NaCl tối đa hòa tan được trong 250 gam nước ở 20°C để tạo dung dịch bão hòa là:',
    options: ['A. 90 gam', 'B. 72 gam', 'C. 108 gam', 'D. 80 gam'],
    correctIndex: 0,
    explanation: 'Cứ 100 g nước hòa tan tối đa 36 g NaCl. Vậy 250 g nước hòa tan tối đa: (250 * 36) / 100 = 90 gam NaCl.'
  },

  // Hóa học - Chuyên đề ôn HSG
  {
    id: 'chm_hsg_1',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Khử oxide kim loại bằng khí CO',
    question: 'Dẫn luồng khí CO dư đi qua ống sứ nung nóng chứa 16 gam hỗn hợp gồm Fe2O3 và CuO. Sau khi phản ứng xảy ra hoàn toàn thu được m gam hỗn hợp hai kim loại và khí thoát ra được hấp thụ hết vào dung dịch Ca(OH)2 dư thu được 25 gam kết tủa trắng CaCO3. Giá trị của m là (Fe=56, Cu=64, Ca=40, C=12, O=16):',
    options: ['A. 12,0 gam', 'B. 13,6 gam', 'C. 10,8 gam', 'D. 14,4 gam'],
    correctIndex: 0,
    explanation: 'Khí CO cướp nguyên tử O trong oxit: CO + [O] -> CO2; CO2 + Ca(OH)2 -> CaCO3 + H2O. Số mol kết tủa n(CaCO3) = 25 / 100 = 0,25 mol = n(CO2) = n(O trong oxit bị lấy đi). Khối lượng O bị lấy đi = 0,25 * 16 = 4,0 gam. Khối lượng kim loại m = m_oxit - m(O) = 16 - 4 = 12,0 gam.'
  },
  {
    id: 'chm_hsg_2',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Tăng giảm khối lượng thanh kim loại',
    question: 'Nhúng một thanh kim loại sắt (Fe) sạch có khối lượng ban đầu 50 gam vào 200 ml dung dịch CuSO4 1M. Sau một thời gian lấy thanh Fe ra rửa sạch làm khô, cân lại thấy thanh nặng 50,8 gam. Giả sử toàn bộ Cu sinh ra bám hết lên thanh Fe. Khối lượng Cu đã bám lên thanh sắt là (Fe=56, Cu=64):',
    options: ['A. 6,4 gam', 'B. 0,8 gam', 'C. 5,6 gam', 'D. 12,8 gam'],
    correctIndex: 0,
    explanation: 'PTHH: Fe + CuSO4 -> FeSO4 + Cu. Cứ 1 mol Fe (56g) tan ra thì có 1 mol Cu (64g) bám vào, làm khối lượng thanh kim loại tăng: 64 - 56 = 8 gam. Khối lượng thanh tăng thực tế = 50,8 - 50 = 0,8 gam. Số mol Fe phản ứng = n(Cu tạo thành) = 0,8 / 8 = 0,1 mol. Khối lượng Cu bám lên thanh = 0,1 * 64 = 6,4 gam.'
  },
  {
    id: 'chm_hsg_3',
    subject: 'Hóa học',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Xác định công thức phân tử hợp chất hữu cơ',
    question: 'Đốt cháy hoàn toàn 4,6 gam một hợp chất hữu cơ X (gồm C, H, O) thu được 8,8 gam CO2 và 5,4 gam H2O. Biết tỉ khối hơi của X so với khí hydrogen (H2) bằng 23. Công thức phân tử của X là (C=12, H=1, O=16):',
    options: ['A. C2H6O', 'B. C2H4O2', 'C. C3H8O', 'D. CH4O'],
    correctIndex: 0,
    explanation: 'M(X) = 23 * 2 = 46 g/mol. n(CO2) = 8,8 / 44 = 0,2 mol -> n(C) = 0,2 mol (mC = 2,4g). n(H2O) = 5,4 / 18 = 0,3 mol -> n(H) = 0,6 mol (mH = 0,6g). Khối lượng O = 4,6 - (2,4 + 0,6) = 1,6g -> n(O) = 1,6 / 16 = 0,1 mol. Tỉ lệ C : H : O = 0,2 : 0,6 : 0,1 = 2 : 6 : 1. Công thức đơn giản nhất (C2H6O)n. Với M = 46 -> 46n = 46 -> n = 1. CTPT là C2H6O (rượu ethylic hoặc đimetyl ete).'
  },
  {
    id: 'chm_hsg_4',
    subject: 'Hóa học',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Độ tan và Tinh thể ngậm nước',
    question: 'Hòa tan 50 gam tinh thể đồng(II) sunfat ngậm nước CuSO4.5H2O vào 150 gam nước ở 25°C. Nồng độ phần trăm của dung dịch CuSO4 thu được là (Cu=64, S=32, O=16, H=1):',
    options: ['A. 16,0%', 'B. 25,0%', 'C. 20,5%', 'D. 32,0%'],
    correctIndex: 0,
    explanation: 'M(CuSO4.5H2O) = 160 + 5 * 18 = 250 g/mol. Khối lượng CuSO4 khan trong 50g tinh thể = 50 * (160 / 250) = 32 gam. Tổng khối lượng dung dịch sau khi hòa tan = 50 + 150 = 200 gam. Nồng độ C% = (32 / 200) * 100% = 16,0%.'
  },

  // ==========================================
  // 4. KHOA HỌC TRÁI ĐẤT
  // ==========================================
  // Khoa học Trái Đất - Cơ bản
  {
    id: 'ear_cb_1',
    subject: 'Khoa học Trái Đất',
    grade: '6',
    difficulty: 'Cơ bản',
    topic: 'Cấu tạo bên trong của Trái Đất',
    question: 'Cấu tạo bên trong của Trái Đất gồm có bao nhiêu lớp chính từ ngoài vào trong?',
    options: [
      'A. 3 lớp: Vỏ Trái Đất, Lớp Mantin (bao màng) và Nhân Trái Đất.',
      'B. 2 lớp: Thạch quyển và Thủy quyển.',
      'C. 4 lớp: Vỏ, Khí quyển, Sinh quyển và Thủy quyển.',
      'D. 5 lớp đồng tâm bằng kim loại.'
    ],
    correctIndex: 0,
    explanation: 'Trái Đất cấu tạo gồm 3 lớp chính: Vỏ Trái Đất ngoài cùng (rắn chắc, dày 5-70km), Lớp Mantin ở giữa (chiếm phần lớn thể tích) và Nhân Trái Đất (lõi kim loại sắt - niken ở tâm).'
  },
  {
    id: 'ear_cb_2',
    subject: 'Khoa học Trái Đất',
    grade: '6',
    difficulty: 'Cơ bản',
    topic: 'Hệ quả chuyển động tự quay của Trái Đất',
    question: 'Hiện tượng ngày và đêm luân phiên xảy ra liên tục trên khắp bề mặt Trái Đất là do nguyên nhân chủ yếu nào?',
    options: [
      'A. Trái Đất có dạng hình cầu và tự quay quanh trục từ Tây sang Đông.',
      'B. Trái Đất quay xung quanh Mặt Trời trên quỹ đạo elip.',
      'C. Mặt Trời di chuyển vòng quanh Trái Đất mỗi ngày.',
      'D. Mặt Trăng che khuất ánh sáng Mặt Trời theo chu kì.'
    ],
    correctIndex: 0,
    explanation: 'Do Trái Đất hình cầu nên tại một thời điểm Mặt Trời chỉ chiếu sáng được một nửa (ban ngày), nửa còn lại nằm trong bóng tối (ban đêm). Do Trái Đất tự quay quanh trục nên mọi nơi lần lượt được chiếu sáng và khuất sáng luân phiên.'
  },
  {
    id: 'ear_cb_3',
    subject: 'Khoa học Trái Đất',
    grade: '7',
    difficulty: 'Cơ bản',
    topic: 'Hệ Mặt Trời & Các hành tinh',
    question: 'Hành tinh nào trong Hệ Mặt Trời nằm ở vị trí thứ 3 tính theo khoảng cách từ Mặt Trời ra ngoài?',
    options: ['A. Trái Đất', 'B. Sao Hỏa', 'C. Sao Kim', 'D. Sao Thủy'],
    correctIndex: 0,
    explanation: 'Thứ tự 8 hành tinh tính từ Mặt Trời: Sao Thủy -> Sao Kim -> Trái Đất (vị trí thứ 3) -> Sao Hỏa -> Sao Mộc -> Sao Thổ -> Sao Thiên Vương -> Sao Hải Vương.'
  },
  {
    id: 'ear_cb_4',
    subject: 'Khoa học Trái Đất',
    grade: '8',
    difficulty: 'Cơ bản',
    topic: 'Các tầng khí quyển',
    question: 'Hầu hết các hiện tượng thời tiết như mây, mưa, sấm sét, bão, tuyết... xảy ra ở tầng khí quyển nào?',
    options: ['A. Tầng đối lưu', 'B. Tầng bình lưu', 'C. Tầng trung lưu', 'D. Tầng nhiệt'],
    correctIndex: 0,
    explanation: 'Tầng đối lưu (từ mặt đất lên độ cao khoảng 10-16km) chứa khoảng 80% khối lượng không khí và gần như toàn bộ hơi nước của khí quyển, là nơi diễn ra mọi hiện tượng thời tiết.'
  },
  {
    id: 'ear_cb_5',
    subject: 'Khoa học Trái Đất',
    grade: '6',
    difficulty: 'Cơ bản',
    topic: 'Tài nguyên khoáng sản',
    question: 'Nhóm khoáng sản năng lượng (nhiên liệu) bao gồm các loại khoáng vật nào sau đây?',
    options: ['A. Than đá, dầu mỏ và khí đốt tự nhiên', 'B. Sắt, đồng, nhôm và chì', 'C. Đá vôi, cát, sỏi và sét', 'D. Kim cương và vàng sa khoáng'],
    correctIndex: 0,
    explanation: 'Khoáng sản năng lượng gồm than đá, than bùn, dầu mỏ, khí đốt; khoáng sản kim loại gồm sắt, đồng, nhôm...; khoáng sản phi kim gồm đá vôi, cát, sét...'
  },

  // Khoa học Trái Đất - Vận dụng
  {
    id: 'ear_vd_1',
    subject: 'Khoa học Trái Đất',
    grade: '6',
    difficulty: 'Vận dụng',
    topic: 'Chuyển động quanh Mặt Trời & Các mùa',
    question: 'Tại sao ở Việt Nam vào mùa hè (tháng 5 đến tháng 7) lại có hiện tượng "Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã tối"?',
    options: [
      'A. Vào mùa hè, bán cầu Bắc nghiêng về phía Mặt Trời nên có ngày dài hơn đêm.',
      'B. Do Mặt Trời di chuyển với tốc độ nhanh hơn vào mùa hè.',
      'C. Do mây che khuất Mặt Trời vào mùa đông.',
      'D. Do Trái Đất ở gần Mặt Trời nhất vào mùa hè.'
    ],
    correctIndex: 0,
    explanation: 'Việt Nam nằm ở bán cầu Bắc. Vào mùa hè (tháng 5-7), bán cầu Bắc ngả về phía Mặt Trời nên góc chiếu sáng lớn, diện tích được chiếu sáng nhiều hơn bóng tối khiến ngày dài hơn đêm.'
  },
  {
    id: 'ear_vd_2',
    subject: 'Khoa học Trái Đất',
    grade: '7',
    difficulty: 'Vận dụng',
    topic: 'Thủy triều & Sức hút Mặt Trăng',
    question: 'Hiện tượng thủy triều lên và xuống hàng ngày trên các vùng biển đại dương chủ yếu do lực hấp dẫn của thiên thể nào tác dụng lên Trái Đất?',
    options: ['A. Sức hút của Mặt Trăng và một phần của Mặt Trời', 'B. Chỉ do gió thổi trên mặt đại dương', 'C. Do sự tự quay nhanh của đại dương', 'D. Do động đất dưới đáy biển tạo ra'],
    correctIndex: 0,
    explanation: 'Mặt Trăng ở gần Trái Đất nhất nên lực hấp dẫn của Mặt Trăng là lực chủ yếu hút lớp nước lỏng đại dương tạo thành bướu nước thủy triều khi Trái Đất quay.'
  },
  {
    id: 'ear_vd_3',
    subject: 'Khoa học Trái Đất',
    grade: '8',
    difficulty: 'Vận dụng',
    topic: 'Áp suất khí quyển & Gió',
    question: 'Gió là sự chuyển động của không khí theo phương nằm ngang từ nơi nào đến nơi nào?',
    options: ['A. Từ khu vực áp cao về khu vực áp thấp', 'B. Từ khu vực áp thấp về khu vực áp cao', 'C. Từ nơi lạnh về nơi lạnh hơn', 'D. Từ đất liền ra biển suốt 24 giờ'],
    correctIndex: 0,
    explanation: 'Gió là luồng không khí chuyển động do sự chênh lệch khí áp, luôn thổi từ nơi có áp suất khí quyển cao (áp cao) về nơi có áp suất khí quyển thấp (áp thấp).'
  },
  {
    id: 'ear_vd_4',
    subject: 'Khoa học Trái Đất',
    grade: '9',
    difficulty: 'Vận dụng',
    topic: 'Hiệu ứng nhà kính & Biến đổi khí hậu',
    question: 'Khí nào sau đây chiếm tỉ trọng gây ra hiệu ứng nhà kính nhân tạo lớn nhất hiện nay do các hoạt động đốt cháy nhiên liệu hóa thạch của con người?',
    options: ['A. Carbon dioxide (CO2)', 'B. Methane (CH4)', 'C. Hơi nước', 'D. Khí Argon'],
    correctIndex: 0,
    explanation: 'Khí CO2 phát thải từ nhà máy nhiệt điện, giao thông và công nghiệp chiếm hơn 70% lượng khí nhà kính nhân tạo, làm Trái Đất nóng lên toàn cầu.'
  },

  // Khoa học Trái Đất - Nâng cao
  {
    id: 'ear_nc_1',
    subject: 'Khoa học Trái Đất',
    grade: '6',
    difficulty: 'Nâng cao',
    topic: 'Thuyết kiến tạo mảng & Vành đai lửa',
    question: 'Tại sao khu vực vành đai Thái Bình Dương lại tập trung tới hơn 75% số núi lửa đang hoạt động và hơn 90% các trận động đất mạnh nhất trên thế giới?',
    options: [
      'A. Là nơi tiếp xúc và xô húc giữa các mảng kiến tạo thạch quyển lớn (mảng Thái Bình Dương, Á-Âu, Bắc Mỹ, Nazca...).',
      'B. Do đáy biển Thái Bình Dương sâu nhất thế giới.',
      'C. Do nhiệt độ nước biển Thái Bình Dương cao hơn các đại dương khác.',
      'D. Do trục quay Trái Đất nghiêng lệch về phía Tây Thái Bình Dương.'
    ],
    correctIndex: 0,
    explanation: 'Theo thuyết kiến tạo mảng, vỏ Trái Đất gồm các mảng trôi dạt trên quyển mềm. Ranh giới tiếp xúc (xô húc hoặc tách dãn) giữa các mảng kiến tạo là nơi vỏ Trái Đất yếu nhất, magma trào lên tạo núi lửa và ma sát gây đứt gãy dẫn đến động đất liên tục.'
  },
  {
    id: 'ear_nc_2',
    subject: 'Khoa học Trái Đất',
    grade: '8',
    difficulty: 'Nâng cao',
    topic: 'Tầng Ozone & Bảo vệ sinh quyển',
    question: 'Tầng ozone (O3) tập trung dày đặc nhất ở tầng bình lưu (độ cao 20 - 30 km). Vai trò sống còn của tầng ozone đối với toàn bộ sự sống trên Trái Đất là gì?',
    options: [
      'A. Hấp thụ phần lớn tia bức xạ tử ngoại (UV-B, UV-C) có hại từ Mặt Trời phát ra.',
      'B. Giữ lại toàn bộ lượng nhiệt bức xạ từ bề mặt Trái Đất phản xạ lên.',
      'C. Ngăn không cho các thiên thạch bay vào khí quyển Trái Đất.',
      'D. Cung cấp khí oxygen trực tiếp cho các loài chim bay ở tầng cao.'
    ],
    correctIndex: 0,
    explanation: 'Các phân tử O3 trong tầng bình lưu hấp thụ bức xạ tử ngoại bước sóng ngắn (UV nguy hiểm), bảo vệ AND tế bào của sinh vật và con người khỏi ung thư da, đục thủy tinh thể và biến dị di truyền.'
  },
  {
    id: 'ear_nc_3',
    subject: 'Khoa học Trái Đất',
    grade: '7',
    difficulty: 'Nâng cao',
    topic: 'Thiên văn học: Hiện tượng Nhật thực & Nguyệt thực',
    question: 'Khi xảy ra hiện tượng Nhật thực toàn phần, vị trí tương đối giữa Mặt Trời, Mặt Trăng và Trái Đất được sắp xếp thẳng hàng theo thứ tự nào?',
    options: [
      'A. Mặt Trời - Mặt Trăng - Trái Đất',
      'B. Mặt Trời - Trái Đất - Mặt Trăng',
      'C. Trái Đất - Mặt Trời - Mặt Trăng',
      'D. Mặt Trăng - Mặt Trời - Trái Đất'
    ],
    correctIndex: 0,
    explanation: 'Nhật thực xảy ra khi Mặt Trăng đi vào giữa Mặt Trời và Trái Đất, che khuất một phần hoặc toàn bộ đĩa Mặt Trời khi nhìn từ mặt đất.'
  },
  {
    id: 'ear_nc_4',
    subject: 'Khoa học Trái Đất',
    grade: '9',
    difficulty: 'Nâng cao',
    topic: 'Hiện tượng El Nino & La Nina',
    question: 'Hiện tượng El Nino đặc trưng bởi sự ấm lên bất thường của lớp nước biển bề mặt ở khu vực trung tâm và phía đông xích đạo Thái Bình Dương. Tại Việt Nam, hiện tượng El Nino thường gây ra hình thế thời tiết nào?',
    options: [
      'A. Lượng mưa sụt giảm đáng kể, hạn hán kéo dài và nhiệt độ mùa hè cao hơn trung bình nhiều năm.',
      'B. Mưa lũ dồn dập vượt kỉ lục ở khắp các tỉnh miền Trung.',
      'C. Bão tuyết xuất hiện diện rộng ở vùng đồng bằng Bắc Bộ.',
      'D. Số lượng các cơn bão mạnh đổ bộ tăng gấp ba lần bình thường.'
    ],
    correctIndex: 0,
    explanation: 'Tại Việt Nam trong những năm El Nino, tần suất bão trên Biển Đông thường ít hơn, nhưng tính chất dị thường tăng lên; nhiệt độ trung bình cao hơn và lượng mưa thiếu hụt dẫn tới khô hạn, xâm nhập mặn nghiêm trọng ở Nam Bộ và Tây Nguyên.'
  },

  // Khoa học Trái Đất - Chuyên đề ôn HSG
  {
    id: 'ear_hsg_1',
    subject: 'Khoa học Trái Đất',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Lực Coriolis & Tuần hoàn khí quyển',
    question: 'Do chuyển động tự quay của Trái Đất quanh trục từ Tây sang Đông, mọi vật thể chuyển động trên bề mặt Trái Đất đều bị lệch hướng so với hướng ban đầu (lực quán tính Coriolis). Ở bán cầu Bắc và bán cầu Nam, vật chuyển động bị lệch hướng như thế nào?',
    options: [
      'A. Bán cầu Bắc lệch về bên phải, Bán cầu Nam lệch về bên trái theo hướng chuyển động.',
      'B. Bán cầu Bắc lệch về bên trái, Bán cầu Nam lệch về bên phải theo hướng chuyển động.',
      'C. Cả hai bán cầu đều lệch về phía Đông.',
      'D. Không bị lệch hướng ở các vĩ độ trung bình và vùng cực.'
    ],
    correctIndex: 0,
    explanation: 'Lực Coriolis (Fc = 2*m*[v x omega]) làm các khối khí và dòng hải lưu ở bán cầu Bắc bị lệch sang phải của hướng chuyển động, còn ở bán cầu Nam bị lệch sang bên trái. Đây là nguyên nhân các xoáy bão ở bán cầu Bắc luôn xoáy ngược chiều kim đồng hồ.'
  },
  {
    id: 'ear_hsg_2',
    subject: 'Khoa học Trái Đất',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Cân bằng bức xạ nhiệt Trái Đất',
    question: 'Suất phản chiếu (Albedo) của bề mặt Trái Đất là tỉ số giữa bức xạ Mặt Trời phản xạ trở lại không gian so với bức xạ tới. Bề mặt nào sau đây có chỉ số Albedo cao nhất (phản xạ năng lượng Mặt Trời mạnh nhất)?',
    options: ['A. Băng tuyết tươi mới ở hai vùng cực (~80-90%)', 'B. Mặt nước biển đại dương (~6-10%)', 'C. Rừng mưa nhiệt đới (~15%)', 'D. Đất canh tác nông nghiệp (~20%)'],
    correctIndex: 0,
    explanation: 'Băng và tuyết trắng tươi có độ phản xạ bức xạ Mặt Trời cực lớn (80-90%), làm giảm nhiệt lượng Trái Đất hấp thụ. Khi băng tan do ấm lên toàn cầu, nước biển lộ ra có Albedo thấp (chỉ ~8%) sẽ hấp thụ nhiều nhiệt hơn, tạo thành vòng phản hồi nhiệt dương đẩy nhanh tốc độ biến đổi khí hậu.'
  },
  {
    id: 'ear_hsg_3',
    subject: 'Khoa học Trái Đất',
    grade: '8',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Thủy quyển & Băng tan vùng cực',
    question: 'Theo các nghiên cứu hải dương học hiện đại, nếu toàn bộ khối băng trên lục địa Nam Cực (Antarctica) và đảo Greenland tan chảy hoàn toàn, mực nước biển trung bình trên toàn cầu ước tính sẽ dâng cao thêm khoảng bao nhiêu mét?',
    options: ['A. Khoảng 60 đến 70 mét', 'B. Khoảng 1 đến 2 mét', 'C. Khoảng 10 đến 15 mét', 'D. Không dâng cao vì băng đã ở sẵn dưới biển'],
    correctIndex: 0,
    explanation: 'Băng Nam Cực và Greenland nằm trên đất liền (lục địa). Khối lượng băng lục địa khổng lồ này nếu tan hết và đổ vào đại dương sẽ làm mực nước biển dâng cao khoảng 60 đến 70 mét, nhấn chìm hầu hết các đồng bằng châu thổ và thành phố ven biển.'
  },
  {
    id: 'ear_hsg_4',
    subject: 'Khoa học Trái Đất',
    grade: '9',
    difficulty: 'Chuyên đề ôn HSG',
    topic: 'Chuyên đề HSG: Diễn thế địa chất & Thang thời gian',
    question: 'Sự kiện tuyệt chủng kỷ Phấn Trắng - Paleogen (K-Pg) xảy ra cách đây khoảng 66 triệu năm làm tuyệt diệt loài khủng long được chứng minh bởi bằng chứng địa chất nào nổi bật trên toàn cầu?',
    options: [
      'A. Lớp trầm tích mỏng chứa hàm lượng nguyên tố Iridium (Ir) cao bất thường có nguồn gốc từ thiên thạch ngoài hành tinh.',
      'B. Lớp hóa thạch san hô dày đặc ở đỉnh núi Everest.',
      'C. Dấu vết từ trường đảo chiều liên tục trong 100 năm.',
      'D. Nồng độ khí oxy trong đá trầm tích tăng vọt gấp 5 lần.'
    ],
    correctIndex: 0,
    explanation: 'Nguyên tố Iridium rất hiếm trên vỏ Trái Đất nhưng dồi dào trong các tiểu hành tinh. Sự hiện diện đồng loạt của ranh giới đất sét giàu Iridium trên toàn cầu cùng vết tích miệng hố va chạm Chicxulub ở Mexico là bằng chứng quyết định cho vụ va chạm thiên thạch đường kính ~10km xóa sổ khủng long.'
  }
];

// Normalize helpers
export function normalizeSubject(sub: string): string {
  if (!sub) return 'Vật lí';
  const s = sub.toLowerCase();
  if (s.includes('sinh')) return 'Sinh học';
  if (s.includes('vật') || s.includes('vat') || s.includes('lý') || s.includes('lí')) return 'Vật lí';
  if (s.includes('hóa') || s.includes('hoa') || s.includes('chem')) return 'Hóa học';
  if (s.includes('trái đất') || s.includes('địa') || s.includes('earth') || s.includes('môi trường')) return 'Khoa học Trái Đất';
  return 'Vật lí';
}

export function normalizeDifficulty(diff: string): 'Cơ bản' | 'Vận dụng' | 'Nâng cao' | 'Chuyên đề ôn HSG' {
  if (!diff) return 'Nâng cao';
  const d = diff.toLowerCase();
  if (d.includes('cơ bản') || d.includes('dễ') || d.includes('nhận biết') || d.includes('thông hiểu')) {
    return 'Cơ bản';
  }
  if (d.includes('vận dụng cao') || d.includes('chuyên đề') || d.includes('hsg') || d.includes('học sinh giỏi')) {
    return 'Chuyên đề ôn HSG';
  }
  if (d.includes('vận dụng') || d.includes('trung bình')) {
    return 'Vận dụng';
  }
  if (d.includes('nâng cao') || d.includes('khó')) {
    return 'Nâng cao';
  }
  return 'Nâng cao';
}

/**
 * Filter questions strictly adhering to requested subject, difficulty and grade.
 * GUARANTEE: Never mixes subjects! Sinh học will NEVER contain Vật lí or Hóa học questions.
 */
export function getQuestionsBySubjectAndLevel(
  subjectInput: string,
  gradeInput: string = '8',
  difficultyInput: string = 'Nâng cao',
  count: number = 5
): QuestionItem[] {
  const normSub = normalizeSubject(subjectInput);
  const normDiff = normalizeDifficulty(difficultyInput);
  const cleanGrade = (gradeInput || '8').replace(/\D/g, '') || '8';

  // 1. Filter all questions belonging to this subject
  const subjectPool = OLYMPIAD_QUIZ_BANK.filter(q => q.subject === normSub);
  
  if (subjectPool.length === 0) {
    // If somehow no subject questions (should not happen), return fallback matching subject
    return OLYMPIAD_QUIZ_BANK.filter(q => q.subject === 'Vật lí').slice(0, count);
  }

  // 2. Strict matching by difficulty
  let matchedQuestions = subjectPool.filter(q => q.difficulty === normDiff);

  // If grade also matches within that difficulty, prioritize matching grade
  const gradeMatched = matchedQuestions.filter(q => q.grade === cleanGrade);
  const otherGradeMatched = matchedQuestions.filter(q => q.grade !== cleanGrade);
  matchedQuestions = [...gradeMatched, ...otherGradeMatched];

  // 3. If we don't have enough questions at the exact difficulty, supplement from the SAME SUBJECT
  if (matchedQuestions.length < count) {
    // Other difficulties in same subject
    const otherLevels = subjectPool.filter(q => q.difficulty !== normDiff);
    // Sort other levels by closeness to requested difficulty
    const diffPriority: Record<string, string[]> = {
      'Cơ bản': ['Vận dụng', 'Nâng cao', 'Chuyên đề ôn HSG'],
      'Vận dụng': ['Cơ bản', 'Nâng cao', 'Chuyên đề ôn HSG'],
      'Nâng cao': ['Chuyên đề ôn HSG', 'Vận dụng', 'Cơ bản'],
      'Chuyên đề ôn HSG': ['Nâng cao', 'Vận dụng', 'Cơ bản']
    };
    const order = diffPriority[normDiff] || [];
    otherLevels.sort((a, b) => order.indexOf(a.difficulty) - order.indexOf(b.difficulty));

    for (const item of otherLevels) {
      if (matchedQuestions.length >= count) break;
      if (!matchedQuestions.some(m => m.id === item.id)) {
        matchedQuestions.push({
          ...item,
          difficulty: normDiff // adapt difficulty badge
        });
      }
    }
  }

  // 4. If count is higher than total available items in subject, clone with unique IDs
  let finalResult = [...matchedQuestions];
  let loopCount = 0;
  while (finalResult.length < count && loopCount < 5) {
    loopCount++;
    const cloned = matchedQuestions.map((q, idx) => ({
      ...q,
      id: `${q.id}_clone_${loopCount}_${idx}`
    }));
    finalResult = finalResult.concat(cloned);
  }

  return finalResult.slice(0, count);
}
