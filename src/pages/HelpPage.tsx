import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/pages/HelpPage.css'

export const HelpPage: FC = () => {
    const history = useHistory()

    return (
        <>
            <Header />
            <div className="help-container">
                <div className="help-title">
                    ПОМОЩЬ
                </div>
                <div className="help-nav">
                    <span className="help-nav-link" onClick={() => history.push("/")}>Главная {" "}</span>
                    <span>&gt;</span>
                    <span>ПОМОЩЬ {" "}</span>
                </div>
                <div className="help-main">
                    <div className="help-content">
                        <h3>ВОПРОСЫ/ОТВЕТЫ</h3>
                        <br />
                        <h3>ЧТО ТАКОЕ СТРАЙКБОЛ?</h3>
                        <p> Страйкбол (от английского strike — удар и ball — шар,
                            за рубежом используется значение - Airsoft) — командная, военно-спортивная игра,
                            вид активного отдыха, ролевая командная игра военно-тактического направления.
                            В процессе игры участники имитируют действия различных вооруженных структур
                            (армии, полиции, спецназа, наёмников различных стран мира), выполняя
                            поставленные сценарием задачи. В качестве вооружения игроки используют,
                            страйкбольное оружие, стреляющее пластиковыми шариками калибра 6 мм с
                            энергией выстрела менее 3Дж
                        </p>
                        <br />
                        <h3>ВИДЫ СТРАЙКБОЛЬНОГО ОРУЖИЯ</h3>
                        <ul>
                            <li>
                                AEG (Automatic Electric Gun) - Оно же ЭПО (Электро Пневматическое Оружие) Автоматическое оружие для страйкбола, с электроприводом, работающее от аккумуляторных батарей.
                            </li>
                            <li>GBB (Gas Blow Back) - Газовые винтовки и пистолеты с автоматическим ходом затвора.</li>
                            <li>Spring Gun - Страйкбольное "пружинное" оружие с механическим взводом затвора (чаще всего можно встретить на снайперских винтовках).</li>
                            <li>Grenade Launcher - Подствольный гранатомет, как отдельно носимый, так и устанавливающийся на страйкбольное оружие. (способ выстрела - отдельно заправляющаяся газом и шарами граната, для подствольного гранатомета).</li>
                        </ul>
                        <br />
                        <h3>ШАРЫ ДЛЯ СТРАЙКБОЛА</h3>
                        <br />
                        <p>Шары для страйкбола, на английском "BB" имеют диаметр 6мм, производятся из пластика, имеют различный вес: 0.12гр, 0.20гр, 0.23гр, 0.25гр, 0.28гр, 0.30гр, 0.36гр, 0.43гр. Различный вес шаров используются в зависимости от тюнинга страйкбольного оружия. В последнее время появились в продаже страйкбольные "био" шары, сделанные из специальный материалов, разлагающиеся в земле</p>
                        <br />
                        <h3>ТЮНИНГ СТРАЙКБОЛЬНОГО ОРУЖИЯ</h3>
                        <br />
                        <p><strong>Внешний тюнинг</strong> - модернизация страйкбольного оружия, установка прицелов, фонарей, сошек и прочих допов, которые придают так называемый "антураж".</p>
                        <p><strong>Внутренний тюнинг</strong> - улучшение технических характеристик страйкбольного оружия в основном влияющих на дальность и кучность стрельбы. (базовое страйкбольное оружие имеет начальную скорость полета шара 80-120 м/с, после тюнинга она может достигать 200 м/с)</p>
                        <br />
                        <h3>СНАРЯЖЕНИЯ ДЛЯ СТРАЙКБОЛА</h3>
                        <br />
                        <p>В страйкболе используется форма и военное снаряжение различных вооруженных структур (армии, полиции, спецназа, наёмников различных стран мира). Вы вправе выбирать сами, кем Вам быть.</p>
                        <br />
                        <h3>ЗАЩИТА В СТРАЙКБОЛЕ</h3>
                        <br />
                        <p>Как принято, на страйкбольные игры не допускаются игроки без специальных защитных очков или масок. Чаще всего используются очки с линзами произведенными из поликарбонатных материалов, выдерживающие попадание шара с близкого расстояния. Остальные средства защиты, наколенники, налокотники, перчатки, каски, шлемы приветствуются, но не обязательны. Все это на Ваш выбор.</p>
                        <br />
                        <h3>АККУМУЛЯТОРЫ И ЗАРЯДНЫЕ УСТРОЙСТВА:</h3>
                        <br />
                        <p>Аккумуляторы используемые в страйкболе бывают нескольких типов: NiCd (никель-кадмиевые), NiMd (Никель-металгидридные), LiPo (литиево-полимерные аккумуляторы), LiFe (литий-фосфатным аккумуляторы). Зарядные устройства используемые для зарядки выше перечисленных видов аккумуляторов бывают нескольких видов "простые" и "умные". Простые зарядные устройства - имеют один вариант заряда аккумулятора, делают это долго и не всегда качественно. Умные зарядные устройства - это многофункциональные девайсы для одной и более аккумуляторных батарей, с разными видами и возможностями заряда.</p>
                        <br />
                        <h3>ВОЛЬТАЖ И ЕМКОСТЬ АККУМУЛЯТОРОВ</h3>
                        <br />
                        <p>Какой вольтаж используется в страйкбольных аккумуляторных батареях: NiCd (никель-кадмиевые), NiMd (Никель-металлогидридные) - 7.2, 8.4, 9.6, 10.8, 12 вольт; LiPo (литиево-полимерные аккумуляторы) - 7.4, 11.1 вольт; LiFe (литий-фосфатным аккумуляторы) - 6.6, 9.9, 13.2 вольт. Вольтаж выбирается в зависимости от тюнинга используемого Вами в страйкбольном оружии. Чем выше тюнинг тем больше вольтаж.</p>
                        <p>Емкость аккумуляторных батарей влияет на количество выстрелов. Чем Выше емкость, тем больше шаров Вы сможете потратить.</p>
                        <br />
                        <h3>ЧТО ТАКОЕ GEARBOX (ГИРБОКС)?</h3>
                        <br />
                        <p>Gearbox (гирбокс) - это корпус, сделанный из двух половинок, в котором помещаются все основные детали и механизмы, для работы AEG.</p>
                        <br />
                        <h3>СОСТАВЛЯЮЩИЕ GEARBOX (ГИРБОКСА)</h3>
                        <br />
                        <p>Нозл - Nozzle
                            Голова цилиндра - Cylinder head
                            Цилиндр - Cylinder
                            Поршень - Piston
                            Голова поршня - Piston head
                            Пружина - Spring
                            Направляющая пружины - Spring guide
                            Таппет (таппет плейт) - Tappet plate
                            Возвратная пружина таппет плейт - Tappet plate return spring
                            Моторная шестерня - Bevel gear
                            Средняя шестерня - Spur gear
                            Секторная шестерня - Sector gear
                            Антиреверс - Anti-reverse
                            Прижимная пружина антиреверса - Anti-reverse latch return spring
                            Втулки - Bushing
                            Спусковой крючок - Trigger
                            Возвратная пружина спускового крючка - Trigger return spring
                            Механический предохранитель - Safety cover
                            Прижимная пружина механического предохранителя - Stopper-arm spring
                            Контактная группа - Switch assembley
                            Возвратная пружина контактной группы - Switch return spring
                            Отсекатель одиночного огня - Cut off lever
                            Возвратная пружина отсекателя одиночного огня - Selector plate sprig
                            Селектор плейт (селекторная планка) - Selector plate
                            Шайбы и винты.</p>
                        <br />
                        <h3>ЧТО ТАКОЕ HOP-UP?</h3>
                        <br />
                        <p><strong>Hop-up</strong> (сокращенно Higher operating power) - это метод воздействия на шар, позволяющий увеличить дальность полёта без использования дополнительной энергии, применяя обратное вращение. Обратное вращение достигается при помощи небольшой резиновой пластинки "Резинка Hop-Up", расположенной в верхней части основания ствола, которая цепляет верхнюю часть шара, в момент его прохождения через канал ствола. Трение на верху шара становится больше, чем в основании, это и заставляет шар вращаться. "Подкрутка» позволяет шару непродолжительное время в течение полёта сопротивляться силе притяжения, таким образом – дальность полёта подкрученного шара увеличивается, по сравнению с шаром запущенным без какого либо вращения. Страйкбольное оружие есть как с регулируемым, так и не с регулируемым Hop-Up.</p>
                    </div>
                    <div className="pad-content-nav">
                        <div className="pad-content-nav-col">
                            <div className="pad-content-nav-col-title">
                                Информация
                            </div>
                            <div className="pad-content-nav-col-item" onClick={() => history.push("/guarantee")}>
                                Гарантия
                            </div>
                            <div className="pad-content-nav-col-item" onClick={() => history.push("/payment-and-delivery")}>
                                Оплата и доставка
                            </div>
                            <div className="pad-content-nav-col-item-active">
                                Помощь
                            </div>
                        </div>
                        <div className="pad-content-nav-col">
                            <div className="pad-content-nav-col-title">
                                Служба поддержки
                            </div>
                            <div className="pad-content-nav-col-item" onClick={() => history.push('/contact')}>
                                Контакты
                            </div>
                            <div className="pad-content-nav-col-item">
                                Возврат товара
                            </div>
                            <div className="pad-content-nav-col-item">
                                Карта сайта
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}