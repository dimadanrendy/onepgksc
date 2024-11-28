import BeritaPage from "@/components/screen/berita";
import PageCarousel from "@/components/screen/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { logoSlogan } from "@/lib/image";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageCarousel />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
          <Image
            src={logoSlogan}
            alt="Logo"
            width={700}
            height={700}
            quality={100}
          />
          <p className="mt-4 text-gray-600 text-lg max-w-2xl">
            One PGK Swimming Club Melahirkan Atlet Berprestasi dan Berbakat di
            Bidang Olahraga Renang di Pangkal Pinang.
          </p>
          <div className="mt-8 flex gap-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfs3uhQDB955uRbu4BbTEDUbtoyFclaSjymuIapjFkTXcicNQ/viewform">
              <Button variant="default" className="px-6 py-3">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Keunggulan
            </h2>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              One PGK Swimming Club
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Kedisiplinan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leverage artificial intelligence to streamline processes and
                    achieve better outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Teknik Yang Baik</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamlessly connect to cloud platforms for unmatched
                    scalability and flexibility.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Stamina Yang Kuat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gain actionable insights from your data with our advanced
                    analytics tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Prestasi Atlet
            </h2>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              One PGK Swimming Club
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardContent>
                  <p className="text-gray-600">
                    This platform has revolutionized the way we approach our
                    business. Highly recommend it!
                  </p>
                  <p className="mt-4 font-bold text-gray-800">- Alex Johnson</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent>
                  <p className="text-gray-600">
                    Amazing service and top-notch support. Weve seen tremendous
                    growth using their tools.
                  </p>
                  <p className="mt-4 font-bold text-gray-800">
                    - Maria Fernandez
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardContent>
                  <p className="text-gray-600">
                    The AI solutions provided have helped us save time and
                    improve efficiency.
                  </p>
                  <p className="mt-4 font-bold text-gray-800">- John Smith</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Proses Latihan
            </h2>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              One PGK Swimming Club
            </h2>
            <div className="relative">
              <div className="w-full h-64 sm:h-1/2 bg-gray-300 overflow-hidden rounded-lg shadow-lg">
                {/* Ganti dengan video Anda */}
                <video className="w-full h-full object-cover" controls loop>
                  <source src="/videos/latihan/latihan1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* Galery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800">
              Galery Foto
            </h2>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
              One PGK Swimming Club
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Kedisiplinan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Leverage artificial intelligence to streamline processes and
                    achieve better outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Teknik Yang Baik</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamlessly connect to cloud platforms for unmatched
                    scalability and flexibility.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Stamina Yang Kuat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gain actionable insights from your data with our advanced
                    analytics tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className="py-16">
          <BeritaPage />
        </div>
        {/* Call to Action Section */}
        <section className="py-16 bg-blue-500 text-white text-center">
          <h2 className="text-4xl font-bold">
            Start Your Digital Journey Today
          </h2>
          <p className="mt-4 text-lg">
            Join thousands of businesses using our technology to innovate and
            grow.
          </p>
          <Button
            variant="default"
            className="mt-8 px-8 py-4 bg-white text-blue-500 hover:bg-gray-100">
            Get Started Now
          </Button>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-gray-400 text-center">
          <p>
            &copy; {new Date().getFullYear()} Powered by One PGK Swimming Club
          </p>
        </footer>
      </div>
    </>
  );
}
