import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import Loader from '../components/Loader';
import Card from '../components/Card';

const Home = () => {
    const { isLoading, isError, data } = useQuery({
        queryKey: "recipes",
        queryFn: () =>
            api.get("/api/recipe")
                .then((res) => res.data),



    });

    console.log(data);
    return (
        <main className='flex-1 bg-gray-200 p-4 overflow-auto'>
            <section>
                <div className='bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg'>
                    <CiSearch className='text-xl' />
                    <input className='w-full outline-none' type="text" />
                </div>
            </section>
            <section>
                {isLoading ? (<Loader />) : isError ? (<Error />) : (
                    <>

                        <div className='flex justify-between items-center'>
                            <h1 className='text-3xl my-5'>{data.results} tarif bulundu</h1>

                            <select name="" id="">
                                <option selected disabled>Süreye Göre</option>
                                <option value="asc">Artan</option>

                                <option value="desc">Azalan</option>
                            </select>
                        </div>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                            {data.recipes.map((recipe) => (
                                <Card recipe={recipe} key={recipe.id} />
                            )

                            )}
                        </div>

                    </>)}
            </section>
        </main>
    )
}

export default Home