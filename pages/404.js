import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'

export default function NotFoundPage() {
    return (
        <Layout title="not found">
            <div className="flex flex-col items-center mt-20">
                <Image src="/images/logo.png" width={70} height={70} className="bg-gray-800 rounded-2xl" />
                <h1 className="text-6xl my-5">Whoooops!</h1>
                <h2 className="text-4xl text-gray-400">
                    THis page doesn't exsist
                </h2>
                <button className="bg-indigo-400 text-gray-800 text-2xl font-bold rounded-2xl my-6 w-1/5">
                    <a href="/">Return Home</a>
                </button>
            </div>
        </Layout>
    )
}
