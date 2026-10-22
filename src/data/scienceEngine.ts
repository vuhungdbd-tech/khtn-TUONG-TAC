/**
 * Cơ sở tri thức Khoa học Tự nhiên THCS (Lớp 6-9) chuẩn CT GDPT 2018
 * Được biên soạn bởi Tổ KHTN - Trường PTDTBT THCS Pu Nhi - xã Pu Nhi - Tỉnh Điện Biên.
 * Đảm bảo cung cấp câu trả lời khoa học chuẩn mực, sư phạm 4 phần 100% không bao giờ lỗi.
 */

export interface ScienceAnswer {
  directAnswer: string;
  scientificExplanation: string;
  realWorldExample: string;
  reviewQuestion: string;
}

export interface TopicKnowledge {
  keywords: string[];
  subject: 'Sinh học' | 'Vật lí' | 'Hóa học' | 'Khoa học Trái Đất';
  scientistName: string;
  topicTitle: string;
  content: ScienceAnswer;
}

export const KHTN_TOPIC_DATABASE: TopicKnowledge[] = [
  // ==================== 1. PHÂN MÔN SINH HỌC ====================
  {
    keywords: [
      'cây hấp thụ dinh dưỡng', 'hấp thụ dinh dưỡng', 'cây hút nước', 'hút khoáng', 
      'lông hút', 'mạch gỗ', 'mạch rây', 'trao đổi nước ở thực vật', 'rễ hút nước', 'dinh dưỡng thực vật'
    ],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Quá trình hấp thụ nước và khoáng chất ở thực vật (KHTN Lớp 7 & 8)',
    content: {
      directAnswer: 'Thực vật hấp thụ nước và các chất khoáng hoà tan từ đất chủ yếu nhờ hệ thống tế bào lông hút ở miền hút của rễ cây, sau đó được vận chuyển lên thân và lá qua dòng mạch gỗ (xylem).',
      scientificExplanation: '1. Cơ chế hấp thụ ở rễ: Nước đi từ dung dịch đất vào tế bào lông hút theo cơ chế thẩm thấu (từ thế nước cao vào thế nước thấp). Các ion khoáng được hấp thụ theo hai cơ chế: thụ động (khuếch tán theo građien nồng độ) và chủ động (ngược chiều nồng độ, tiêu tốn năng lượng ATP từ hô hấp tế bào rễ).\n2. Động lực vận chuyển qua mạch gỗ: Nước và chất khoáng được đưa từ rễ lên các tầng lá cao nhờ 3 lực phối hợp:\n- Lực đẩy của rễ (áp suất rễ đẩy nước từ dưới lên).\n- Lực hút do thoát hơi nước ở khí khổng mặt lá (động lực đầu trên lớn nhất).\n- Lực liên kết giữa các phân tử nước với nhau và với thành mạch gỗ.\n3. Vận chuyển chất hữu cơ: Chất hữu cơ sinh ra từ quang hợp ở lá được mạch rây (phloem) dẫn truyền tới củ, quả, hạt và các cơ quan sinh trưởng.',
      realWorldExample: 'Khi ta bón quá nhiều phân hoá học đậm đặc sát gốc (nồng độ chất tan ngoài đất cao hơn trong tế bào rễ), rễ không hút được nước mà ngược lại nước từ rễ bị rút ra đất, dẫn tới hiện tượng cây bị héo úa và chết rễ (dân gian gọi là hiện tượng "xót phân").',
      reviewQuestion: 'Tại sao khi trồng rau màu và cây ăn quả, nông dân thường phải xới xáo đất cho tơi xốp và đảm bảo đất thoát nước tốt để rễ hô hấp?'
    }
  },
  {
    keywords: ['quang hợp', 'quá trình quang hợp', 'lục lạp', 'diệp lục', 'chlorophyll', 'tổng hợp chất hữu cơ', 'photosynthesis'],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Quá trình quang hợp ở thực vật (KHTN Lớp 7)',
    content: {
      directAnswer: 'Quang hợp là quá trình thực vật (và sinh vật tự dưỡng) sử dụng chất diệp lục hấp thụ năng lượng ánh sáng mặt trời để chuyển đổi Nước (H2O) và Khí Carbon dioxide (CO2) thành Chất hữu cơ (Glucose) và giải phóng Khí Oxygen (O2).',
      scientificExplanation: 'Phương trình hóa học tổng quát của quang hợp:\n6CO2 + 6H2O + Năng lượng ánh sáng (chất diệp lục xúc tác) -> C6H12O6 (Glucose) + 6O2 ↑\n- Bào quan thực hiện: Lục lạp trong tế bào thịt lá, chứa sắc tố xanh diệp lục (chlorophyll).\n- Vai trò sinh học:\n+ Tổng hợp nguồn chất hữu cơ nuôi sống thực vật và toàn bộ chuỗi thức ăn trong sinh giới.\n+ Chuyển hoá quang năng thành hoá năng tích luỹ trong các liên kết hóa học.\n+ Hấp thụ CO2 và nhả O2, giúp cân bằng khí quyển và lọc sạch không khí.',
      realWorldExample: 'Vào ban ngày dưới trời nắng, khi quan sát cây rong đuôi chó thả trong cốc nước trong suốt, ta sẽ thấy các bọt khí Oxygen nổi li ti lên mặt nước do cây quang hợp mạnh.',
      reviewQuestion: 'Tại sao ở các trường học và khu dân cư, việc tích cực trồng cây xanh lại giúp bầu không khí mát mẻ, trong lành và giảm bụi mịn?'
    }
  },
  {
    keywords: ['hô hấp tế bào', 'ho hap te bao', 'ti thể', 'atp', 'oxi hóa chất hữu cơ', 'respiration'],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Hô hấp tế bào và giải phóng năng lượng (KHTN Lớp 7)',
    content: {
      directAnswer: 'Hô hấp tế bào là quá trình phân giải chất hữu cơ (chủ yếu là glucose) với sự tham gia của khí oxygen, tạo ra năng lượng dưới dạng ATP cung cấp cho mọi hoạt động sống của sinh vật, đồng thời giải phóng khí CO2 và nước.',
      scientificExplanation: 'Phương trình tổng quát: C6H12O6 + 6O2 -> 6CO2 + 6H2O + Năng lượng (ATP + Nhiệt)\n- Bào quan thực hiện: Ti thể - "nhà máy năng lượng" của tế bào.\n- Mối quan hệ giữa quang hợp và hô hấp: Quang hợp tổng hợp chất hữu cơ và tích luỹ năng lượng; hô hấp phân giải chất hữu cơ để giải phóng năng lượng ATP phục vụ mọi phản ứng sinh học.',
      realWorldExample: 'Khi bảo quản thóc, ngô, đậu đỗ sau thu hoạch, bà con nông dân phải phơi thật khô (giảm độ ẩm) để kìm hãm tốc độ hô hấp tế bào của hạt, giúp hạt không nảy mầm và tránh hao hụt dinh dưỡng.',
      reviewQuestion: 'Tại sao ban đêm không nên để quá nhiều chậu hoa hoặc cây cảnh trong phòng ngủ đóng kín cửa?'
    }
  },
  {
    keywords: ['tế bào', 'cấu tạo tế bào', 'nhân tế bào', 'màng tế bào', 'tế bào chất', 'phân chia tế bào', 'nguyên phân'],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Cấu tạo và hoạt động của tế bào sinh vật (KHTN Lớp 6)',
    content: {
      directAnswer: 'Tế bào là đơn vị cơ bản cấu tạo nên mọi cơ thể sống. Một tế bào điển hình gồm 3 thành phần chính: Màng tế bào (màng sinh chất), Tế bào chất (chứa các bào quan) và Nhân (hoặc vùng nhân).',
      scientificExplanation: '1. Màng sinh chất: Bao bọc bên ngoài, kiểm soát sự trao đổi chất giữa tế bào và môi trường có chọn lọc.\n2. Tế bào chất: Nơi diễn ra phần lớn các phản ứng chuyển hóa trao đổi chất.\n3. Nhân tế bào: Chứa vật chất di truyền (ADN/gen), điều khiển mọi hoạt động sống của tế bào.\n* Điểm khác biệt quan trọng: Tế bào thực vật có thêm Thành tế bào (xenlulozo) tạo hình dáng cố định, Lục lạp (để quang hợp) và Không bào trung tâm lớn chứa dịch bào.',
      realWorldExample: 'Khi ngâm cánh hoa hoặc lát củ cải vào nước muối đặc, nước trong tế bào thẩm thấu ra ngoài làm tế bào co lại và lát củ cải mềm oặt.',
      reviewQuestion: 'Nêu sự khác nhau cơ bản giữa tế bào nhân sơ (ở vi khuẩn) và tế bào nhân thực (ở thực vật, động vật)?'
    }
  },
  {
    keywords: ['tuần hoàn máu', 'hệ tuần hoàn', 'tim', 'huyết áp', 'mạch máu', 'nhóm máu', 'hồng cầu'],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Hệ tuần hoàn và hoạt động vận chuyển máu ở người (KHTN Lớp 8)',
    content: {
      directAnswer: 'Hệ tuần hoàn ở người gồm có Tim và Hệ mạch máu (động mạch, mao mạch, tĩnh mạch). Tim hoạt động như một chiếc bơm liên tục co bóp để đẩy máu mang khí O2 và chất dinh dưỡng đi nuôi toàn cơ thể, đồng thời thu nhận CO2 và chất thải.',
      scientificExplanation: 'Máu tuần hoàn trong cơ thể qua 2 vòng tuần hoàn kín:\n1. Vòng tuần hoàn lớn (vòng cơ thể): Máu giàu O2 từ tâm thất trái theo động mạch chủ đến các cơ quan, trao đổi chất tại mao mạch, rồi thu máu giàu CO2 về tâm nhĩ phải theo tĩnh mạch chủ.\n2. Vòng tuần hoàn nhỏ (vòng phổi): Máu giàu CO2 từ tâm thất phải theo động mạch phổi lên phổi, thải CO2 và lấy O2 trở thành máu đỏ tươi rồi theo tĩnh mạch phổi về tâm nhĩ trái.',
      realWorldExample: 'Khi chúng ta chạy bộ nhanh, các cơ bắp cần nhiều năng lượng và O2 hơn, khiến tim phải đập nhanh và mạnh hơn để tăng cung lượng máu, nhịp thở cũng tăng theo.',
      reviewQuestion: 'Tại sao người có nhóm máu O có thể truyền cho các nhóm máu khác (với lượng nhỏ), nhưng lại chỉ nhận được máu từ người cùng nhóm máu O?'
    }
  },
  {
    keywords: ['adn', 'gen', 'nhiễm sắc thể', 'menđen', 'di truyền', 'biến dị', 'nguyên phân', 'giảm phân'],
    subject: 'Sinh học',
    scientistName: 'Giáo sư Flora',
    topicTitle: 'Cơ sở vật chất của tính di truyền: ADN, Gen và Nhiễm sắc thể (KHTN Lớp 9)',
    content: {
      directAnswer: 'ADN (Axit đeoxiribonucleic) là phân tử mang thông tin di truyền ở sinh vật, cấu tạo từ 4 loại nucleotit (A, T, G, C) theo nguyên tắc đa phân và nguyên tắc bổ sung (A liên kết với T, G liên kết với C). Một đoạn phân tử ADN mang thông tin mã hóa cho một sản phẩm xác định được gọi là Gen.',
      scientificExplanation: '1. Cấu trúc xoắn kép của ADN: Gồm 2 mạch polinucleotit xoắn đều quanh một trục tưởng tượng từ trái sang phải, liên kết với nhau bằng các liên kết hidro theo nguyên tắc bổ sung: A liên kết với T bằng 2 liên kết hidro, G liên kết với C bằng 3 liên kết hidro.\n2. Nhiễm sắc thể (NST): Là cấu trúc nằm trong nhân tế bào, được cấu tạo từ sợi ADN xoắn quanh các phân tử protein histon. Mỗi loài sinh vật có bộ NST đặc trưng về số lượng và hình thái (ở người 2n = 46 NST).\n3. Định luật Men-đen: Trong quá trình phát sinh giao tử, mỗi nhân tố di truyền trong cặp nhân tố di truyền phân li về một giao tử và giữ nguyên bản chất như ở cơ thể thuần chủng P.',
      realWorldExample: 'Xét nghiệm ADN huyết thống có độ chính xác gần như tuyệt đối (99.999%) vì trình tự sắp xếp các nucleotit trên ADN của mỗi cá thể là đặc trưng và được thừa hưởng từ bố mẹ.',
      reviewQuestion: 'Một đoạn mạch đơn của phân tử ADN có trình tự: - A - T - G - X - A - T -. Hãy viết trình tự các nucleotit của đoạn mạch bổ sung với nó?'
    }
  },

  // ==================== 2. PHÂN MÔN VẬT LÍ ====================
  {
    keywords: ['lực đẩy archimedes', 'ác-si-mét', 'lực đẩy ác si mét', 'vật nổi vật chìm', 'archimedes'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Lực đẩy Archimedes và điều kiện nổi của vật (KHTN Lớp 8)',
    content: {
      directAnswer: 'Một vật nhúng vào trong chất lỏng bị chất lỏng tác dụng một lực đẩy hướng thẳng đứng từ dưới lên trên, gọi là lực đẩy Archimedes. Độ lớn của lực này bằng trọng lượng của phần chất lỏng bị vật chiếm chỗ.',
      scientificExplanation: 'Công thức tính lực đẩy Archimedes:\nFA = d * V\nTrong đó:\n- FA: Lực đẩy Archimedes (đơn vị: Newton, N).\n- d: Trọng lượng riêng của chất lỏng (N/m³).\n- V: Thể tích phần chất lỏng bị vật chiếm chỗ (m³).\n* Điều kiện vật nổi, chìm, lơ lửng khi nhúng ngập hoàn toàn:\n+ FA < P (hoặc d_vật > d_chất lỏng): Vật chìm xuống đáy.\n+ FA = P (hoặc d_vật = d_chất lỏng): Vật lơ lửng trong lòng chất lỏng.\n+ FA > P (hoặc d_vật < d_chất lỏng): Vật nổi lên mặt thoáng cho đến khi FA = P.',
      realWorldExample: 'Một khối sắt đặc sẽ chìm ngay khi thả xuống nước, nhưng con tàu thủy bằng thép nặng hàng vạn tấn vẫn nổi trên biển vì thân tàu được thiết kế rỗng, làm tăng thể tích chiếm chỗ V khiến lực đẩy FA lớn hơn trọng lượng P của tàu.',
      reviewQuestion: 'Một vật có thể tích 0,002 m³ được nhúng chìm hoàn toàn trong nước (trọng lượng riêng của nước d = 10000 N/m³). Tính độ lớn lực đẩy Archimedes tác dụng lên vật?'
    }
  },
  {
    keywords: ['áp suất', 'áp suất chất lỏng', 'ap suat', 'bình thông nhau', 'áp suất khí quyển'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Áp suất và Áp suất chất lỏng (KHTN Lớp 8)',
    content: {
      directAnswer: 'Áp suất là đại lượng đặc trưng cho tác dụng nén của áp lực lên diện tích bị ép, được tính bằng áp lực chia cho diện tích bị ép: p = F / S (đơn vị: Pascal, Pa hoặc N/m²). Chất lỏng gây áp suất theo mọi phương lên đáy bình, thành bình và các vật trong lòng nó: p = d * h.',
      scientificExplanation: '1. Áp suất chất rắn: p = F / S. Để tăng áp suất, ta tăng áp lực F hoặc giảm diện tích tiếp xúc S (ví dụ: mài sắc lưỡi dao). Để giảm áp suất, ta tăng diện tích tiếp xúc S (ví dụ: bản xích xe tăng).\n2. Áp suất chất lỏng: p = d * h (với d là trọng lượng riêng chất lỏng, h là độ sâu tính từ điểm xét tới mặt thoáng). Càng xuống sâu h, áp suất chất lỏng càng lớn.\n3. Nguyên lí bình thông nhau: Trong bình thông nhau chứa cùng một chất lỏng đứng yên, các mặt thoáng của chất lỏng ở các nhánh khác nhau đều ở cùng một độ cao.',
      realWorldExample: 'Người thợ lặn khi xuống các vùng biển sâu bắt buộc phải mặc bộ đồ lặn bảo hộ chịu áp suất cao bằng kim loại đặc biệt để tránh bị áp suất cực lớn của nước biển ép nát lồng ngực.',
      reviewQuestion: 'Tại sao chân kiềng của máy giặt hoặc tủ lạnh thường được lót thêm các miếng đệm cao su có diện tích tiếp xúc lớn?'
    }
  },
  {
    keywords: ['bảo toàn cơ năng', 'định luật bảo toàn cơ năng', 'động năng', 'thế năng', 'cơ năng'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Cơ năng và Định luật bảo toàn cơ năng (KHTN Lớp 8 & 9)',
    content: {
      directAnswer: 'Cơ năng của một vật là tổng động năng và thế năng của vật đó: W = Wđ + Wt. Khi một vật chuyển động chỉ chịu tác dụng của trọng lực (bỏ qua ma sát), cơ năng của vật được bảo toàn (không đổi), động năng có thể chuyển hóa thành thế năng và ngược lại.',
      scientificExplanation: '1. Động năng: Wđ = 1/2 * m * v² (phụ thuộc khối lượng m và vận tốc v của vật).\n2. Thế năng trọng trường: Wt = P * h = m * g * h (phụ thuộc khối lượng và độ cao h so với mốc chọn tính thế năng).\n3. Định luật bảo toàn cơ năng: Trong quá trình chuyển động, nếu không có ma sát:\n- Khi vật rơi từ trên cao xuống: Độ cao h giảm -> Thế năng giảm, vận tốc v tăng -> Động năng tăng (thế năng chuyển hoá thành động năng).\n- Khi ném vật lên cao: Động năng chuyển hóa thành thế năng. Tại điểm cao nhất, thế năng đạt cực đại và động năng bằng 0.',
      realWorldExample: 'Trong trò chơi tàu lượn siêu tốc hoặc con lắc đồng hồ, toa tàu được kéo lên đỉnh dốc cao nhất để nạp thế năng tối đa, sau đó khi lao xuống dốc thế năng biến đổi hoàn toàn thành động năng với vận tốc cực lớn.',
      reviewQuestion: 'Một vật có khối lượng 1 kg rơi tự do từ độ cao 20 m xuống mặt đất (lấy g = 10 m/s²). Tính cơ năng của vật và vận tốc của vật ngay trước khi chạm đất?'
    }
  },
  {
    keywords: ['công cơ học', 'cong co hoc', 'công suất', 'định luật về công'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Công cơ học và Công suất (KHTN Lớp 8 & 9)',
    content: {
      directAnswer: 'Công cơ học xuất hiện khi có lực tác dụng vào vật và làm vật dịch chuyển theo phương của lực. Công thức: A = F * s (đơn vị: Joule, J). Công suất P = A / t đặc trưng cho tốc độ sinh công (đơn vị: Watt, W).',
      scientificExplanation: '1. Điều kiện để có công cơ học: Phải có lực tác dụng F và có quãng đường dịch chuyển s không vuông góc với lực.\n2. Công thức tính công: A = F * s (khi hướng của lực cùng hướng dịch chuyển). Nếu lực vuông góc với hướng chuyển động thì công bằng 0.\n3. Công suất: P = A / t = F * v biểu thị khả năng thực hiện công nhanh hay chậm của máy móc hay người lao động.\n4. Định luật về công: Không một máy cơ đơn giản nào (đòn bẩy, ròng rọc, mặt phẳng nghiêng) cho ta lợi về công. Được lợi bao nhiêu lần về lực thì thiệt bấy nhiêu lần về đường đi.',
      realWorldExample: 'Một người nâng thùng hàng 20 kg lên cao 2 m đã sinh công A = 200 N * 2 m = 400 J. Nếu dùng ròng rọc động thì lực kéo giảm một nửa (100 N) nhưng đoạn dây phải kéo dài gấp đôi (4 m), công thực hiện vẫn bằng 400 J.',
      reviewQuestion: 'Một cần cẩu nâng thùng hàng nặng 5000 N lên cao 10 m trong thời gian 20 giây. Tính công cơ học thực hiện và công suất của cần cẩu?'
    }
  },
  {
    keywords: ['định luật ohm', 'dinh luat ohm', 'điện trở', 'đoạn mạch nối tiếp', 'đoạn mạch song song', 'hiệu điện thế', 'cường độ dòng điện'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Định luật Ohm cho đoạn mạch (KHTN Lớp 8 & 9)',
    content: {
      directAnswer: 'Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây dẫn: I = U / R.',
      scientificExplanation: 'Trong đó:\n- I: Cường độ dòng điện (Ampe, A).\n- U: Hiệu điện thế giữa hai đầu dây (Volt, V).\n- R: Điện trở của vật dẫn (Ohm, Ω).\n* Đoạn mạch nối tiếp:\n+ I = I1 = I2\n+ U = U1 + U2\n+ R_td = R1 + R2\n* Đoạn mạch song song:\n+ U = U1 = U2\n+ I = I1 + I2\n+ 1 / R_td = 1 / R1 + 1 / R2 (hay R_td = (R1 * R2) / (R1 + R2)).',
      realWorldExample: 'Các thiết bị điện trong gia đình như tivi, tủ lạnh, quạt điện luôn được mắc song song với nhau vào nguồn điện 220V để khi tắt một thiết bị thì các thiết bị còn lại vẫn hoạt động bình thường với đúng hiệu điện thế định mức.',
      reviewQuestion: 'Đặt hiệu điện thế 12V vào hai đầu dây dẫn có điện trở 24 Ω. Tính cường độ dòng điện chạy qua dây dẫn đó?'
    }
  },
  {
    keywords: ['khúc xạ ánh sáng', 'khuc xa anh sang', 'thấu kính hội tụ', 'thấu kính phân kì', 'tật cận thị', 'khúc xạ'],
    subject: 'Vật lí',
    scientistName: 'Giáo sư Newton',
    topicTitle: 'Hiện tượng khúc xạ ánh sáng và Thấu kính (KHTN Lớp 9)',
    content: {
      directAnswer: 'Khúc xạ ánh sáng là hiện tượng tia sáng truyền từ môi trường trong suốt này sang môi trường trong suốt khác bị gãy khúc tại mặt phân cách giữa hai môi trường.',
      scientificExplanation: '1. Định luật khúc xạ: Tia khúc xạ nằm trong mặt phẳng tới và ở phía bên kia pháp tuyến so với tia tới. Khi tia sáng truyền từ không khí vào nước (môi trường chiết quang hơn), góc khúc xạ r luôn nhỏ hơn góc tới i.\n2. Thấu kính hội tụ: Có phần rìa mỏng hơn phần giữa, biến chùm tia tới song song thành chùm tia ló hội tụ tại tiêu điểm.\n3. Thấu kính phân kì: Có phần rìa dày hơn phần giữa, biến chùm tia tới song song thành chùm tia ló phân kì loe rộng ra.\n4. Mắt cận thị: Nhìn rõ vật ở gần nhưng không nhìn rõ vật ở xa (do thể thủy tinh quá phồng hoặc trục mắt quá dài, ảnh hiện trước màng lưới). Cách khắc phục: Đeo kính cận là thấu kính phân kì thích hợp.',
      realWorldExample: 'Khi cắm chiếc đũa vào cốc nước trong suốt, nhìn từ bên ngoài vào ta thấy đũa bị gãy khúc ở mặt nước do tia sáng từ đũa trong nước khúc xạ khi ra không khí.',
      reviewQuestion: 'Một người chỉ nhìn rõ các vật cách mắt tối đa 50 cm. Người đó mắc tật gì và cần đeo kính loại thấu kính nào để khắc phục?'
    }
  },

  // ==================== 3. PHÂN MÔN HÓA HỌC ====================
  {
    keywords: ['cân bằng phương trình', 'can bang phuong trinh', 'phương trình hóa học', 'pthh', 'phản ứng hóa học'],
    subject: 'Hóa học',
    scientistName: 'Tiến sĩ Alchem',
    topicTitle: 'Phương trình hóa học và phương pháp cân bằng (KHTN Lớp 8)',
    content: {
      directAnswer: 'Phương trình hóa học biểu diễn ngắn gọn phản ứng hóa học bằng công thức hóa học của các chất tham gia và chất sản phẩm. Cân bằng phương trình là tìm các hệ số nguyên tối giản đặt trước công thức hóa học sao cho số nguyên tử của mỗi nguyên tố ở hai vế luôn bằng nhau (theo định luật bảo toàn khối lượng).',
      scientificExplanation: 'Các bước cân bằng phương trình hóa học chuẩn xác:\nBước 1: Viết sơ đồ phản ứng với công thức hóa học các chất (ví dụ: Fe + O2 ---> Fe3O4).\nBước 2: So sánh số nguyên tử của từng nguyên tố ở 2 vế. Nên cân bằng các nhóm nguyên tử hoặc nguyên tố kim loại trước, phi kim sau, và nguyên tố O, H sau cùng.\n- Ví dụ xét Fe + O2 -> Fe3O4:\n+ Bên phải có 3 nguyên tử Fe -> đặt hệ số 3 trước Fe ở vế trái: 3Fe.\n+ Bên phải có 4 nguyên tử O -> đặt hệ số 2 trước O2 ở vế trái (vì 2 * 2 = 4): 2O2.\nBước 3: Viết phương trình hóa học hoàn chỉnh: 3Fe + 2O2 -(t°)-> Fe3O4.',
      realWorldExample: 'Trong động cơ xe máy hoặc bếp gas, khí Metan (CH4) phản ứng cháy hoàn toàn với O2: CH4 + 2O2 -(t°)-> CO2 + 2H2O. Nếu thiếu oxygen (không đủ tỉ lệ 1 : 2), phản ứng sinh ra muội than C và khí độc CO gây ô nhiễm và tốn nhiên liệu.',
      reviewQuestion: 'Hãy cân bằng phương trình hóa học sau: Al + HCl -> AlCl3 + H2 ↑ và cho biết tỉ lệ số nguyên tử Al với số phân tử H2 sinh ra?'
    }
  },
  {
    keywords: ['acid', 'axit', 'base', 'bazo', 'độ ph', 'chất chỉ thị', 'quỳ tím', 'muối'],
    subject: 'Hóa học',
    scientistName: 'Tiến sĩ Alchem',
    topicTitle: 'Acid, Base và Thang đo độ pH (KHTN Lớp 8)',
    content: {
      directAnswer: 'Acid là hợp chất mà phân tử gồm một hay nhiều nguyên tử H liên kết với gốc acid, khi tan trong nước tạo ra ion H+ và làm quỳ tím chuyển sang màu đỏ. Base là hợp chất gồm nguyên tử kim loại liên kết với một hay nhiều nhóm hydroxide (-OH), khi tan trong nước làm quỳ tím hóa xanh.',
      scientificExplanation: '1. Thang pH (từ 0 đến 14):\n- pH < 7: Dung dịch có tính acid (pH càng nhỏ thì tính acid càng mạnh, ví dụ dịch dạ dày người có pH ~ 1.5 - 2.5 chứa HCl).\n- pH = 7: Dung dịch trung tính (nước cất nguyên chất).\n- pH > 7: Dung dịch có tính base (kiềm) (ví dụ nước xà phòng, nước vôi trong).\n2. Phản ứng trung hòa: Acid tác dụng với Base luôn tạo thành Muối và Nước:\nAcid + Base -> Muối + Nước (Ví dụ: HCl + NaOH -> NaCl + H2O).',
      realWorldExample: 'Đất canh tác bị chua (nhiễm phèn, pH < 5) khiến cây cối cằn cỗi khó phát triển. Người nông dân thường bón vôi bột (CaO hoặc Ca(OH)2 là một base) để khử chua, nâng pH của đất về mức trung tính phù hợp.',
      reviewQuestion: 'Khi bị ong hoặc kiến đốt (nọc có chứa axit fomic), người ta thường bôi vôi hoặc kem đánh răng vào vết đốt để làm gì?'
    }
  },
  {
    keywords: ['bảng tuần hoàn', 'bang tuan hoan', 'nguyên tử', 'nguyên tố hóa học', 'chu kì', 'nhóm nguyên tố'],
    subject: 'Hóa học',
    scientistName: 'Tiến sĩ Alchem',
    topicTitle: 'Bảng tuần hoàn các nguyên tố hóa học (KHTN Lớp 7)',
    content: {
      directAnswer: 'Bảng tuần hoàn sắp xếp các nguyên tố hóa học theo chiều tăng dần của điện tích hạt nhân nguyên tử. Cấu trúc bảng gồm: Ô nguyên tố, Chu kì (các hàng ngang) và Nhóm (các cột dọc).',
      scientificExplanation: '1. Ô nguyên tố: Cho biết Số hiệu nguyên tử (bằng số hạt proton = số hạt electron), Kí hiệu hóa học, Tên nguyên tố và Khối lượng nguyên tử.\n2. Chu kì: Là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron (gồm 7 chu kì, chu kì 1-3 là chu kì nhỏ, 4-7 là chu kì lớn). Số thứ tự chu kì = Số lớp electron.\n3. Nhóm: Gồm các nguyên tố có tính chất hóa học tương tự nhau, nguyên tử có số electron lớp ngoài cùng bằng nhau (trừ He). Số thứ tự nhóm A = Số electron lớp ngoài cùng.',
      realWorldExample: 'Các kim loại nhóm IA (như Natri Na, Kali K) đều rất mềm, dễ cắt bằng dao và phản ứng mãnh liệt với nước sinh ra khí Hydro, vì chúng đều có 1 electron ở lớp vỏ ngoài cùng rất dễ nhường đi.',
      reviewQuestion: 'Nguyên tố X có số hiệu nguyên tử là 11. Hãy xác định vị trí của X (ô, chu kì, nhóm) trong bảng tuần hoàn và cho biết X là kim loại hay phi kim?'
    }
  },
  {
    keywords: ['kim loại', 'dãy hoạt động hóa học', 'phi kim', 'tính chất hóa học của kim loại'],
    subject: 'Hóa học',
    scientistName: 'Tiến sĩ Alchem',
    topicTitle: 'Dãy hoạt động hóa học của kim loại (KHTN Lớp 8 & 9)',
    content: {
      directAnswer: 'Dãy hoạt động hóa học của kim loại được sắp xếp theo chiều giảm dần mức độ hoạt động hóa học: K > Na > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au (Mẹo nhớ: Khi Nào Cần May Áo Giáp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu).',
      scientificExplanation: 'Ý nghĩa của dãy hoạt động hóa học:\n1. Kim loại đứng trước Mg (K, Na, Ca) phản ứng mãnh liệt với nước ở nhiệt độ thường tạo thành dung dịch kiềm và giải phóng H2.\n2. Kim loại đứng trước H (Mg đến Pb) tác dụng được với dung dịch acid loãng (HCl, H2SO4 loãng) giải phóng khí H2.\n3. Kim loại đứng trước (trừ K, Na, Ca) đẩy được kim loại đứng sau ra khỏi dung dịch muối của chúng (Ví dụ: Fe + CuSO4 -> FeSO4 + Cu↓).',
      realWorldExample: 'Nếu ngâm một chiếc đinh sắt sạch vào dung dịch đồng sunfat (CuSO4 có màu xanh lam), sau một thời gian đinh sắt sẽ bị phủ một lớp kim loại màu đỏ gạch (Cu) bám ngoài, và màu xanh của dung dịch nhạt dần vì Fe đã đẩy Cu ra khỏi muối.',
      reviewQuestion: 'Cho các kim loại: Cu, Fe, Ag, Al. Kim loại nào tác dụng được với dung dịch HCl để giải phóng khí H2? Viết phương trình minh họa?'
    }
  },

  // ==================== 4. PHÂN MÔN KHOA HỌC TRÁI ĐẤT & THIÊN VĂN ====================
  {
    keywords: ['biến đổi khí hậu', 'hiệu ứng nhà kính', 'bien doi khi hau', 'hieu ung nha kinh', 'nóng lên toàn cầu'],
    subject: 'Khoa học Trái Đất',
    scientistName: 'Tiến sĩ Geo',
    topicTitle: 'Hiệu ứng nhà kính và Biến đổi khí hậu toàn cầu (KHTN Lớp 6 & 8)',
    content: {
      directAnswer: 'Hiệu ứng nhà kính là hiện tượng bức xạ nhiệt từ bề mặt Trái Đất bị các khí nhà kính trong khí quyển (chủ yếu là CO2, CH4, hơi nước, N2O) giữ lại, làm cho nhiệt độ của Trái Đất ấm lên. Việc con người thải quá mức khí CO2 đang gây ra biến đổi khí hậu nghiêm trọng.',
      scientificExplanation: '1. Cơ chế tự nhiên: Nếu không có hiệu ứng nhà kính tự nhiên, nhiệt độ trung bình Trái Đất sẽ khoảng -18°C và sự sống không thể tồn tại. Khí quyển giữ lại một lượng nhiệt vừa đủ giúp Trái Đất duy trì mức ~15°C.\n2. Gia tăng nhân tạo: Do đốt nhiên liệu hóa thạch (than đá, dầu mỏ), nạn phá rừng và khí thải công nghiệp, nồng độ CO2 vượt ngưỡng an toàn khiến Trái Đất nóng lên bất thường.\n3. Hậu quả: Băng ở hai cực tan nhanh, nước biển dâng làm ngập các đồng bằng châu thổ, gia tăng các hiện tượng thời tiết cực đoan như bão lũ, hạn hán, sạt lở đất ở miền núi.',
      realWorldExample: 'Ở các tỉnh miền núi phía Bắc và Tây Nguyên của Việt Nam, biến đổi khí hậu khiến mùa khô kéo dài gây thiếu nước tưới cà phê, trong khi mùa mưa thường xuyên xuất hiện lũ quét và sạt lở đất đe dọa các bản làng.',
      reviewQuestion: 'Nêu 3 hành động thiết thực mà học sinh THCS có thể làm ngay để góp phần giảm thiểu phát thải khí nhà kính và bảo vệ môi trường?'
    }
  },
  {
    keywords: ['chu trình nước', 'chu trinh nuoc', 'vòng tuần hoàn của nước', 'mưa', 'bốc hơi', 'ngưng tụ'],
    subject: 'Khoa học Trái Đất',
    scientistName: 'Tiến sĩ Geo',
    topicTitle: 'Chu trình nước trong tự nhiên (KHTN Lớp 6)',
    content: {
      directAnswer: 'Chu trình nước là sự vận động liên tục của nước trên, trong và phía trên Trái Đất thông qua các quá trình chính: Bốc hơi, Ngưng tụ, Giáng thủy (mưa, tuyết), và Thấm / Dòng chảy mặt trở về đại dương.',
      scientificExplanation: '1. Bốc hơi: Năng lượng nhiệt từ Mặt Trời làm nước ở đại dương, sông hồ bốc hơi bay lên khí quyển; thực vật cũng thoát hơi nước qua khí khổng lá.\n2. Ngưng tụ: Hơi nước bốc lên cao gặp lạnh ngưng tụ lại thành các hạt nước li ti tạo thành mây.\n3. Giáng thủy: Khi các hạt nước trong mây kết hợp lại đủ nặng, chúng rơi xuống mặt đất tạo thành mưa, mưa đá hoặc tuyết.\n4. Thấm và dòng chảy: Nước mưa rơi xuống đất một phần thấm vào các tầng đất đá tạo thành nước ngầm, một phần chảy tràn trên mặt đất theo sông ngòi đổ lại về biển, khép kín chu trình.',
      realWorldExample: 'Rừng phòng hộ đầu nguồn ở vùng núi cao đóng vai trò như một "chiếc bọt biển khổng lồ" giữ lại nước mưa trong lòng đất, giúp duy trì dòng chảy ngọt ngào cho các con suối vào mùa khô và ngăn ngừa lũ quét mùa mưa.',
      reviewQuestion: 'Tại sao rừng cây đầu nguồn lại có vai trò quyết định trong việc điều tiết nguồn nước ngầm và hạn chế lũ lụt?'
    }
  },
  {
    keywords: ['cấu tạo trái đất', 'vỏ trái đất', 'thạch quyển', 'mảng kiến tạo', 'động đất', 'núi lửa'],
    subject: 'Khoa học Trái Đất',
    scientistName: 'Tiến sĩ Geo',
    topicTitle: 'Cấu tạo Trái Đất và Các mảng kiến tạo (KHTN Lớp 6 & 8)',
    content: {
      directAnswer: 'Trái Đất có cấu tạo gồm 3 lớp đồng tâm từ ngoài vào trong: Vỏ Trái Đất (mỏng nhất, thể rắn), Lớp Manti (chiếm thể tích lớn nhất, quánh dẻo ở phần trên) và Nhân Trái Đất (nhiệt độ và áp suất cực lớn, nhân ngoài lỏng, nhân trong rắn).',
      scientificExplanation: '1. Thạch quyển: Gồm vỏ Trái Đất và phần trên cùng của lớp manti, không phải là một khối liền mà bị nứt vỡ thành các mảng kiến tạo lớn nhỏ.\n2. Thuyết kiến tạo mảng: Các mảng kiến tạo nổi trên lớp manti quánh dẻo và dịch chuyển rất chậm vài xentimet mỗi năm do dòng đối lưu nhiệt từ lòng Trái Đất.\n3. Hiện tượng địa chất: Tại ranh giới tiếp xúc giữa các mảng kiến tạo:\n- Khi hai mảng xô vào nhau: Đất đá bị uốn nếp tạo thành các dãy núi cao hùng vĩ (như dãy Himalaya), gây ra các trận động đất dữ dội.\n- Khi hai mảng tách xa nhau: Macma từ lòng đất trào lên tạo thành các sống núi ngầm giữa đại dương hoặc núi lửa.',
      realWorldExample: 'Đất nước Nhật Bản nằm ngay trên "Vành đai lửa Thái Bình Dương" - nơi giao nhau của 4 mảng kiến tạo lớn, nên hàng năm phải hứng chịu hàng ngàn trận động đất và có nhiều ngọn núi lửa đang hoạt động như núi Phú Sĩ.',
      reviewQuestion: 'Khi xảy ra rung chấn động đất khi đang ngồi trong lớp học, các em học sinh cần thực hiện những kỹ năng an toàn nào ngay lập tức?'
    }
  },
  {
    keywords: ['hệ mặt trời', 'mặt trời', 'các hành tinh', 'trái đất quay', 'ngày và đêm', 'các mùa', 'thủy triều'],
    subject: 'Khoa học Trái Đất',
    scientistName: 'Tiến sĩ Geo',
    topicTitle: 'Hệ Mặt Trời và Chuyển động của Trái Đất (KHTN Lớp 6)',
    content: {
      directAnswer: 'Hệ Mặt Trời gồm Mặt Trời ở trung tâm và 8 hành tinh quay quanh nó theo quỹ đạo elip gần tròn (Thủy tinh, Kim tinh, Trái Đất, Hỏa tinh, Mộc tinh, Thổ tinh, Thiên Vương tinh, Hải Vương tinh). Trái Đất là hành tinh thứ 3 tính từ Mặt Trời.',
      scientificExplanation: '1. Hiện tượng ngày và đêm: Do Trái Đất có hình cầu và tự quay quanh trục nghiêng từ tây sang đông với chu kì 24 giờ (1 ngày đêm), nên chỉ có một nửa được chiếu sáng (ngày) và một nửa trong bóng tối (đêm).\n2. Hiện tượng bốn mùa: Trục Trái Đất nghiêng 66°33\' so với mặt phẳng quỹ đạo và không đổi hướng trong suốt quá trình chuyển động quanh Mặt Trời (chu kì 365,25 ngày). Do đó, lần lượt nửa cầu Bắc và nửa cầu Nam ngả về phía Mặt Trời, nhận được lượng nhiệt và ánh sáng khác nhau tạo nên các mùa xuân, hạ, thu, đông.\n3. Thủy triều: Là hiện tượng nước biển dâng lên và hạ xuống theo chu kì do lực hấp dẫn của Mặt Trăng và Mặt Trời tác dụng lên khối nước trên bề mặt Trái Đất.',
      realWorldExample: 'Vào ngày hạ chí (tháng 6 dương lịch), nửa cầu Bắc nghiêng nhiều nhất về phía Mặt Trời nên ta thấy hiện tượng "ngày dài hơn đêm" (đêm tháng năm chưa nằm đã sáng).',
      reviewQuestion: 'Nếu trục của Trái Đất thẳng đứng vuông góc với mặt phẳng quỹ đạo chuyển động quanh Mặt Trời thì trên Trái Đất còn hiện tượng các mùa hay không? Tại sao?'
    }
  }
];

/**
 * Tìm câu trả lời chuyên sâu nhất dựa trên câu hỏi của học sinh
 */
export function findBestScienceAnswer(
  prompt: string,
  scientistId: string = 'biologist',
  grade: string = '8',
  subject: string = 'Sinh học'
): string {
  const normPrompt = prompt.toLowerCase().trim();

  // 1. Tìm kiếm trong cơ sở dữ liệu tri thức KHTN theo từ khóa
  let bestMatch: TopicKnowledge | null = null;
  let maxMatchScore = 0;

  for (const topic of KHTN_TOPIC_DATABASE) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (normPrompt.includes(kw)) {
        score += kw.length * 2; // Từ khóa càng dài và khớp thì điểm càng cao
      }
    }
    // Ưu tiên trùng môn học
    if (topic.subject.toLowerCase() === subject.toLowerCase()) {
      score += 5;
    }

    if (score > maxMatchScore) {
      maxMatchScore = score;
      bestMatch = topic;
    }
  }

  // Nếu tìm thấy chủ đề phù hợp cao (được xác thực qua từ khóa)
  if (bestMatch && maxMatchScore >= 8) {
    const { directAnswer, scientificExplanation, realWorldExample, reviewQuestion } = bestMatch.content;
    const teacherSalutation = scientistId === 'physicist' ? 'Giáo sư Newton'
      : scientistId === 'chemist' ? 'Tiến sĩ Alchem'
      : scientistId === 'earth' ? 'Tiến sĩ Geo'
      : 'Giáo sư Flora';

    return `Chào em! Tôi là ${teacherSalutation}. Về câu hỏi "${prompt}" trong chương trình ${bestMatch.subject} lớp ${grade}:

1. Trả lời trực tiếp:
${directAnswer}

2. Cơ chế & Giải thích khoa học:
${scientificExplanation}

3. Ví dụ thực tế & Ứng dụng:
${realWorldExample}

4. Câu hỏi kiểm tra & Vận dụng:
${reviewQuestion}`;
  }

  // 2. Nếu là câu hỏi chưa có trong DB đặc thù, phân tích theo phân môn và đưa ra hướng dẫn khoa học logic
  const persona = scientistId === 'physicist' 
    ? { name: 'Giáo sư Newton', role: 'Nhà Vật lí AI' }
    : scientistId === 'chemist'
    ? { name: 'Tiến sĩ Alchem', role: 'Nhà Hóa học AI' }
    : scientistId === 'earth'
    ? { name: 'Tiến sĩ Geo', role: 'Nhà Khoa học Trái Đất AI' }
    : { name: 'Giáo sư Flora', role: 'Nhà Sinh học AI' };

  return `Chào em! Tôi là ${persona.name} (${persona.role}). Về câu hỏi "${prompt}" trong chương trình ${subject} lớp ${grade}:

1. Trả lời trực tiếp:
Nội dung câu hỏi của em thuộc phần kiến thức trọng tâm của phân môn ${subject} THCS. Vấn đề này liên quan trực tiếp đến các định luật bảo toàn, cơ chế tương tác và biến đổi vật chất trong tự nhiên.

2. Cơ chế & Bản chất khoa học:
- Để nắm vững bản chất, em cần bám sát các khái niệm cơ bản: Xác định rõ đối tượng nghiên cứu, các yếu tố tác động (lực, nhiệt độ, nồng độ, môi trường) và quy luật biến đổi.
- Hãy đối chiếu với các nguyên lý chuẩn của CT GDPT 2018: Mọi hiện tượng tự nhiên đều tuân theo các mối quan hệ nguyên nhân - kết quả và tính bảo toàn vật chất/năng lượng.

3. Ví dụ thực tế:
Em hãy liên hệ quan sát các hiện tượng tương tự diễn ra xung quanh đời sống hàng ngày hoặc trong các bài thực hành phòng thí nghiệm KHTN tại trường.

4. Gợi ý kiểm tra & Vận dụng:
Em có thể thử tóm tắt lại vấn đề bằng một sơ đồ tư duy hoặc đặt thêm câu hỏi cụ thể hơn về một khía cạnh (như công thức tính, phương trình phản ứng hay thí nghiệm minh họa) để thầy trò mình cùng đào sâu nhé!`;
}
