import {useParams} from "react-router-dom";
import { Card, Image, Text, Group } from '@mantine/core';
import {getHeroStatusTextColor} from "./HeroesList";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";

const HeroDetailedInfo = () => {
    const params = useParams();
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${params?.id}`);

    return (
        <>
            {data &&
                <Card shadow="sm" padding="lg" radius="md" withBorder bg='transparent'>
                    <Card.Section>
                        <Image maw={450} mx="auto" radius="sm" src={data.image} alt={data.name} />
                    </Card.Section>

                    <Group position="center" mt="md" mb="xs">
                        <Text weight={500} fz={'lg'} color={'white'}>{data.name}</Text>
                    </Group>

                    <Text color="dimmed">Gender: <span>{data.gender}</span></Text>
                    <Text color="dimmed">Species: <span>{data.species}</span></Text>
                    <Text color="dimmed">Type: <span>{data.type}</span></Text>
                    <Text color="dimmed">Status: <span style={{color: getHeroStatusTextColor(data.status as any)}}>{data.status}</span></Text>
                    <Text color="dimmed">Created: <span>{data.created}</span></Text>

                </Card>
            }

            {isLoading && <Loader />}
            {hasError && <span>Something went wrong...</span>}
        </>
    );
};

export default HeroDetailedInfo;