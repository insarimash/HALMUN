import Header from '../../components/Header';
import Title from '../../components/Title';
import Committe from '../../components/Committe';
import Footer from '../../components/Footer';

import { committesData } from '../../schemas/committeData';
import { infoData } from '../../schemas/infoData';

import styles from './CommittesPage.module.css';
import '../Page.css';

function CommittesPage() {
    return (
        <>
            <Header
                backgroundImgSrc='/images/background.jpeg'
                type='header-content--middle'
				title = {
					<Title
						text='Committes'
					/>
				}
				desc = 'Select a committe to learn more about it'
			>

				<LinkButton to={infoData['registration-link']}>Register Here</LinkButton>
			</Header>

            <main>
           		<div className={`${styles['committe-content']} content`}>
					<Title
						text='Committes'
						textSize='h2'
					/>
					<ul className={styles['committes-grid']}>
						{committesData.map((data, key) => {
							return (
								<li className={styles['committe-grid-item']}>
									<Committe
										imgSrc={data['image']}
										link={`../committes/${data['id']}`}
										title={data['name']}
										desc={data['short-description']}
									/>
								</li>
							);
						})}
					</ul>
				</div>
            </main>

			<Footer/>
        </>
    );
}

export default CommittesPage;