import React from 'react';

function About() {
  return (
    <div 
      className="container my-5"
      style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '0 15px' 
      }}
    >
      <div 
        className="card border-0 shadow-lg"
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}
      >
        <div 
          className="card-header bg-gradient-primary text-white p-4"
          style={{
            background: 'linear-gradient(45deg, #007bff, #00b4ff)',
            padding: '25px',
            borderBottom: 'none'
          }}
        >
          <h1 
            className="display-5 fw-bold mb-0"
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'white'
            }}
          >
            About Us
          </h1>
        </div>
        <div 
          className="card-body p-4"
          style={{ padding: '30px' }}
        >
          <p 
            className="lead"
            style={{
              fontSize: '1.1rem',
              color: '#333',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}
          >
            Xin chào! Tôi là <strong>Trần Lê Trung Hiếu</strong>, một sinh viên đam mê công nghệ và lập trình tại trường đại học. Với mã số sinh viên <strong>DE180438</strong> và thuộc lớp <strong>SE18C02</strong>, tôi đang trên hành trình khám phá thế giới phát triển phần mềm, đặc biệt là lĩnh vực lập trình web với React. Tôi luôn nỗ lực học hỏi, sáng tạo và áp dụng kiến thức vào các dự án thực tế để nâng cao kỹ năng của mình.
          </p>
          <p 
            style={{
              fontSize: '1rem',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}
          >
            Trong quá trình học tập, tôi đã được tiếp xúc với nhiều công nghệ hiện đại và phát triển niềm yêu thích đặc biệt với việc xây dựng các giao diện người dùng thân thiện, hiệu quả. Dự án này là một trong những sản phẩm tôi tạo ra để thể hiện sự hiểu biết của mình về React và cách tổ chức code sao cho rõ ràng, dễ bảo trì. Tôi hy vọng có thể tiếp tục phát triển bản thân và đóng góp vào cộng đồng công nghệ trong tương lai.
          </p>
          <div 
            className="alert alert-info"
            style={{
              backgroundColor: '#cce5ff',
              borderColor: '#b8daff',
              padding: '15px',
              borderRadius: '8px'
            }}
          >
            <h4 
              className="alert-heading"
              style={{ fontSize: '1.25rem', fontWeight: 600, color: '#004085' }}
            >
              Thông tin cá nhân
            </h4>
            <ul 
              style={{ 
                listStyle: 'none', 
                padding: 0, 
                margin: 0,
                color: '#004085'
              }}
            >
              <li style={{ marginBottom: '8px' }}>
                <strong>Họ tên:</strong> Trần Lê Trung Hiếu
              </li>
              <li style={{ marginBottom: '8px' }}>
                <strong>Mã số sinh viên:</strong> DE180438
              </li>
              <li>
                <strong>Lớp:</strong> SE18C02
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;