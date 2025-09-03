
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, AlertTriangle } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translations, Locale } from '@/lib/i18n';
import { useLanguage } from '@/contexts/language-context';
import Image from 'next/image';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [isHeaderScrolled, setIsHeaderScrolled] = React.useState(false);
    const [currentYear, setCurrentYear] = React.useState<number | null>(null);
    const pathname = usePathname();
    const { locale, setLocale } = useLanguage();
    const t = translations[locale];

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsHeaderScrolled(true);
            } else {
                setIsHeaderScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        
        setCurrentYear(new Date().getFullYear());

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: t.nav.home },
        { href: '/institution', label: t.nav.institutions },
        { href: '/organisation', label: t.nav.organisations },
        { href: '/individuals', label: t.nav.individuals },
        { href: '/team', label: t.nav.team },
    ];
    
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { locale } as { locale: Locale });
        }
        return child;
    });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className={cn('sticky top-0 z-50 w-full transition-all duration-300', isHeaderScrolled ? 'bg-background/80 backdrop-blur-sm border-b' : 'bg-transparent')}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={200} height={50} />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn('hover:text-primary transition-colors', pathname === link.href ? 'text-primary' : '')}
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
             <Select defaultValue={locale} onValueChange={(value) => setLocale(value as Locale)}>
                <SelectTrigger className="w-auto h-10 border-none bg-transparent shadow-none focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="hi">हिन्दी</SelectItem>
                </SelectContent>
            </Select>
            <Button asChild size="lg" variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/login">Sign Up</Link>
            </Button>
             <Button variant="destructive" size="icon" asChild>
                <Link href="/sos">
                    <AlertTriangle/>
                    <span className="sr-only">SOS</span>
                </Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium mt-12">
                     <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" prefetch={false}>
                        <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={180} height={45} />
                    </Link>
                    {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn('hover:text-primary transition-colors', pathname === link.href ? 'text-primary' : 'text-muted-foreground')}
                        prefetch={false}
                    >
                        {link.label}
                    </Link>
                    ))}
                </nav>
                 <div className="flex flex-col gap-2 mt-6">
                    <Button asChild size="lg">
                        <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/login">Sign Up</Link>
                    </Button>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {childrenWithProps}
      </main>

      <footer className="w-full bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo-manomitra.png" alt="ManoMitra Logo" width={150} height={40} className="brightness-0 invert"/>
          </div>
          {currentYear && <p className="text-sm mt-4 md:mt-0">&copy; {currentYear} ManoMitra. All rights reserved.</p>}
        </div>
      </footer>
    </div>
  );
}
