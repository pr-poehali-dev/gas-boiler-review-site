import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('main');

  const boilers = [
    {
      id: 1,
      name: 'Котел Конденсационный Pro 24',
      price: '89,900 ₽',
      power: '24 кВт',
      efficiency: '96%',
      type: 'Конденсационный',
      image: 'img/000ce437-8c27-4f95-91c1-4bf3eb5914e2.jpg',
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: 'Котел Настенный Eco 18',
      price: '67,500 ₽',
      power: '18 кВт',
      efficiency: '92%',
      type: 'Настенный',
      image: 'img/ccc93a21-c1c9-42a7-8503-f010910766ea.jpg',
      rating: 4.6,
      reviews: 89
    },
    {
      id: 3,
      name: 'Котел Премиум Max 30',
      price: '124,900 ₽',
      power: '30 кВт',
      efficiency: '98%',
      type: 'Премиум',
      image: 'img/86a03ac3-1b06-4fcf-ba05-9dac34453cb7.jpg',
      rating: 4.9,
      reviews: 203
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Александр Петров',
      rating: 5,
      date: '15 сентября 2024',
      text: 'Отличный котел! Установили месяц назад, работает тихо и экономично. Расход газа снизился на 25% по сравнению со старым котлом.',
      boiler: 'Котел Конденсационный Pro 24',
      avatar: 'АП'
    },
    {
      id: 2,
      name: 'Марина Васильева',
      rating: 5,
      date: '8 сентября 2024',
      text: 'Купили для загородного дома. Компактный, надежный, легко управляется. Сервис компании на высоте - установили быстро и качественно.',
      boiler: 'Котел Настенный Eco 18',
      avatar: 'МВ'
    },
    {
      id: 3,
      name: 'Дмитрий Соколов',
      rating: 4,
      date: '2 сентября 2024',
      text: 'Хороший котел за свои деньги. Единственный минус - немного шумноват при работе горелки, но это терпимо.',
      boiler: 'Котел Настенный Eco 18',
      avatar: 'ДС'
    }
  ];

  const navigation = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'Package' },
    { id: 'reviews', label: 'Отзывы', icon: 'MessageSquare' },
    { id: 'about', label: 'О компании', icon: 'Building' },
    { id: 'service', label: 'Сервис', icon: 'Wrench' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon 
        key={i} 
        name="Star"
        size={16} 
        className={i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      />
    ));
  };

  const MainSection = () => (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Надежные газовые котлы от профессионалов
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Более 15 лет опыта в продаже и обслуживании отопительного оборудования. 
              Гарантия качества, профессиональный монтаж и сервисное обслуживание.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => setActiveSection('catalog')}
              >
                <Icon name="Package" size={20} className="mr-2" />
                Каталог котлов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Icon name="Calculator" size={20} className="mr-2" />
                Подбор котла
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  5 лет гарантии на все котлы. Сертифицированное оборудование от ведущих производителей.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-accent" />
                </div>
                <CardTitle>Профессиональный монтаж</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Команда сертифицированных специалистов. Быстрая и качественная установка с соблюдением всех норм.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-green-600" />
                </div>
                <CardTitle>Сервисная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Круглосуточная техподдержка. Регулярное обслуживание и быстрое устранение неисправностей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные модели</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {boilers.map((boiler) => (
              <Card key={boiler.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-scale-in">
                <div className="aspect-square bg-white p-8 flex items-center justify-center">
                  <img 
                    src={boiler.image} 
                    alt={boiler.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{boiler.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {boiler.power} • {boiler.efficiency} КПД
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{boiler.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">{renderStars(boiler.rating)}</div>
                    <span className="text-sm text-muted-foreground">
                      {boiler.rating} ({boiler.reviews} отзывов)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{boiler.price}</span>
                    <Button size="sm" className="hover:scale-105 transition-transform">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ReviewsSection = () => (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Отзывы клиентов</h1>
      <div className="grid gap-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 animate-fade-in hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {review.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <Badge variant="outline" className="mb-3">{review.boiler}</Badge>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const CatalogSection = () => (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Каталог котлов</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boilers.map((boiler) => (
          <Card key={boiler.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in">
            <div className="aspect-square bg-white p-6 flex items-center justify-center">
              <img 
                src={boiler.image} 
                alt={boiler.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{boiler.name}</CardTitle>
              <CardDescription>
                Мощность: {boiler.power} • КПД: {boiler.efficiency}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{boiler.price}</span>
                <Button>Подробнее</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">О компании</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg text-gray-700 leading-relaxed">
            Наша компания работает в сфере отопительного оборудования более 15 лет. 
            Мы специализируемся на продаже, монтаже и обслуживании газовых котлов 
            от ведущих мировых производителей.
          </p>
          <p className="text-gray-700 leading-relaxed">
            За годы работы мы установили более 5000 котлов и заслужили доверие 
            тысяч клиентов благодаря профессиональному подходу и качественному сервису.
          </p>
        </div>
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <Icon name="Award" className="text-primary" size={24} />
            <span>Сертифицированная компания</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Users" className="text-primary" size={24} />
            <span>Более 5000 довольных клиентов</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Clock" className="text-primary" size={24} />
            <span>15+ лет опыта работы</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="Shield" className="text-primary" size={24} />
            <span>Гарантия до 5 лет</span>
          </div>
        </div>
      </div>
    </div>
  );

  const ServiceSection = () => (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Сервисное обслуживание</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Wrench" className="text-primary" />
              Техническое обслуживание
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Регулярное техническое обслуживание котлов для поддержания 
              максимальной эффективности и продления срока службы.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Проверка всех узлов и систем</li>
              <li>• Очистка теплообменника</li>
              <li>• Настройка параметров работы</li>
              <li>• Замена расходных материалов</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="p-6 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="Phone" className="text-accent" />
              Экстренный вызов
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Круглосуточная аварийная служба для устранения неисправностей 
              и восстановления работы котла.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <p className="font-semibold text-accent">8 (800) 123-45-67</p>
              <p className="text-sm text-gray-600">Работаем 24/7</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const ContactsSection = () => (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-4">
            <Icon name="MapPin" className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Адрес офиса</h3>
              <p className="text-gray-700">г. Москва, ул. Профессиональная, д. 15</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Icon name="Phone" className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Телефоны</h3>
              <p className="text-gray-700">+7 (495) 123-45-67</p>
              <p className="text-gray-700">8 (800) 123-45-67 (бесплатно)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Icon name="Mail" className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-gray-700">info@gasboilers.ru</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <Icon name="Clock" className="text-primary mt-1" size={24} />
            <div>
              <h3 className="font-semibold mb-1">Режим работы</h3>
              <p className="text-gray-700">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-gray-700">Сб: 10:00 - 16:00</p>
              <p className="text-gray-700">Вс: выходной</p>
            </div>
          </div>
        </div>
        
        <Card className="p-6 animate-fade-in">
          <CardHeader>
            <CardTitle>Оставить заявку</CardTitle>
            <CardDescription>
              Свяжитесь с нами для консультации или заказа
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Имя</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="Ваше имя" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон</label>
              <input type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary" placeholder="+7 (999) 123-45-67" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Сообщение</label>
              <textarea className="w-full p-3 border rounded-lg h-24 focus:ring-2 focus:ring-primary" placeholder="Ваш вопрос или комментарий"></textarea>
            </div>
            <Button className="w-full hover:scale-105 transition-transform">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить заявку
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'main': return <MainSection />;
      case 'catalog': return <CatalogSection />;
      case 'reviews': return <ReviewsSection />;
      case 'about': return <AboutSection />;
      case 'service': return <ServiceSection />;
      case 'contacts': return <ContactsSection />;
      default: return <MainSection />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3" onClick={() => setActiveSection('main')} style={{cursor: 'pointer'}}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ГазКотлы.РФ</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className="flex items-center gap-2"
                >
                  <Icon name={item.icon as any} size={16} />
                  {item.label}
                </Button>
              ))}
            </nav>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => setActiveSection('contacts')}>
                <Icon name="Phone" size={16} className="mr-2" />
                +7 (495) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Flame" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ГазКотлы.РФ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Профессиональные решения для отопления вашего дома
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition-colors">Конденсационные котлы</li>
                <li className="cursor-pointer hover:text-white transition-colors">Настенные котлы</li>
                <li className="cursor-pointer hover:text-white transition-colors">Напольные котлы</li>
                <li className="cursor-pointer hover:text-white transition-colors">Комплектующие</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="cursor-pointer hover:text-white transition-colors">Монтаж и установка</li>
                <li className="cursor-pointer hover:text-white transition-colors">Техническое обслуживание</li>
                <li className="cursor-pointer hover:text-white transition-colors">Ремонт и запчасти</li>
                <li className="cursor-pointer hover:text-white transition-colors">Консультации</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@gasboilers.ru</p>
                <p>г. Москва, ул. Профессиональная, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ГазКотлы.РФ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}