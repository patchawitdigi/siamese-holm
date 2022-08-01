import './formregis.css';
import bg from "../img/BG.png";


export default function formregis() {
    return (
        <div className='regis'>
            <img src={bg} />
            <p>เตรียมพบบ้านเดี่ยว-ทาวน์โฮม โครงการใหม่<br />ติดถนนใหญ่ใกล้รถไฟฟ้า และฟิวเจอร์พาร์ครังสิต เพียง 4 นาที</p>
            <h1>ลงทะเบียนเพื่อรับสิทธิพิเศษ</h1>
            <form className='form'>
                <div>
                    <input type="text" placeholder='ชื่อ*'></input>
                    <input type="text" placeholder='นามสกุล*'></input>
                </div>
                <div>
                    <input type="text" placeholder='เบอร์โทรศัพท์*'></input>
                    <input type="text" placeholder='อีเมล'></input>
                </div>
                <div>
                    <select id="house" placeholder='แบบบ้านที่สนใจ*'>
                        <option value="">แบบบ้านที่สนใจ*</option>
                    </select>
                    <select id="house" placeholder='งบประมาณ*'>
                        <option value="">งบประมาณ*</option>
                    </select>
                </div>
            </form>
            <button type="button">ลงทะเบียน</button>
        </div>
    )
}