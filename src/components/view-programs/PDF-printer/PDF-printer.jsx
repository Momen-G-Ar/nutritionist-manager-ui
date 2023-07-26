import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

/**
 * 
 * @param {{
 *  children:React.ReactNode;
 *  client:{
 *      id:String;
 *      info:{
 *          name:String;
 *          phone:Number;
 *          email:String;
 *          date:String;
 *          city:String; 
 *      };
 *      days:{
 *          saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *      };
 *      status:{
 *          saturday:{meals:Number; calories:Number;};
 *          sunday:{meals:Number; calories:Number;}; 
 *          monday:{meals:Number; calories:Number;}; 
 *          tuesday:{meals:Number; calories:Number;};
 *          wednesday:{meals:Number; calories:Number;}; 
 *          thursday:{meals:Number; calories:Number;}; 
 *          friday:{meals:Number; calories:Number;};
 *      };
 * }
 * }} props 
 * @returns 
 */
const PDFPrinter = (props) => {
    return (
        <PDFDownloadLink
            document={<MyDoc client={props.client} />}
            fileName={`${props.client.client.name}.pdf`}
        >
            {props.children}
        </PDFDownloadLink>
    );
};

export default PDFPrinter;

/**
 * 
 * @param {{
 *  client:{
 *      _id:String;
 *      info:{
 *          name:String;
 *          phone:Number;
 *          email:String;
 *          date:String;
 *          city:String; 
 *      };
 *      days:{
 *          saturday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          sunday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          monday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          tuesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;
 *          wednesday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          thursday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>; 
 *          friday:Array<{id:String;name:String;image:String;amount:Number;calories:Number;}>;     
 *      };
 *      status:{
 *          saturday:{meals:Number; calories:Number;};
 *          sunday:{meals:Number; calories:Number;}; 
 *          monday:{meals:Number; calories:Number;}; 
 *          tuesday:{meals:Number; calories:Number;};
 *          wednesday:{meals:Number; calories:Number;}; 
 *          thursday:{meals:Number; calories:Number;}; 
 *          friday:{meals:Number; calories:Number;};
 *      };
 * }}} client 
 * @returns 
 */
const MyDoc = ({client}) => {

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.name}>
                    {client.client.name}
                </Text>
                <View style={styles.info}>
                    <Text style={styles.h5InInfo}>Information:</Text>
                    <Text style={styles.spanInInfo}>
                        Birth of Date:&nbsp;
                        {client.client.date}
                    </Text>
                    <Text style={styles.spanInInfo}>
                        City:&nbsp;
                        {client.client.city}
                    </Text>
                    <Text style={styles.spanInInfo}>
                        Email:&nbsp;
                        {client.client.email}
                    </Text>
                    <Text style={styles.spanInInfo}>
                        Phone:&nbsp;
                        {client.client.phone}
                    </Text>
                </View>
                <View style={styles.program}>
                    <Text style={styles.h5InInfo}> Programs: </Text>
                    <Text style={styles.dayName}> Saturday: </Text>
                    {
                        client.days.saturday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Sunday: </Text>
                    {
                        client.days.sunday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Monday: </Text>
                    {
                        client.days.monday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Tuesday: </Text>
                    {
                        client.days.tuesday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Wednesday: </Text>
                    {
                        client.days.wednesday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Thursday: </Text>
                    {
                        client.days.thursday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
            <Page size="A4" style={styles.page}>
                <View style={styles.program}>
                    <Text style={styles.dayName}> Friday: </Text>
                    {
                        client.days.friday.map((food, i) => {
                            return (
                                <View key={i + food.name} style={styles.card}>
                                    <Image style={styles.image} src={food.image} />
                                    <View style={styles.infoInCard}>
                                        <Text style={styles.nameInCard}>{food.name.toUpperCase()}</Text>
                                        <Text style={styles.textInCard}>Amount: {food.amount} meals</Text>
                                        <Text style={styles.textInCard}>Calories: {food.calories} Kcal</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E4E4E4',
        width: '100%',
        height: '100%',
    },
    name: {
        marginTop: '10px',
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: '30px',
        paddingLeft: '30px',
        width: '100%',
    },
    h5InInfo: {
        display: 'flex',
        fontSize: '16px',
        width: '95%',
        marginBottom: '16px',
        borderBottom: '1px solid gray',
    },
    dayName: {
        width: '95%',
        display: 'flex',
        fontSize: '15px',
        marginBottom: '16px',
        textDecoration: 'underline'
    },
    spanInInfo: {
        display: 'flex',
        width: '100%',
        fontSize: '14px',
        marginBottom: '8px',
    },
    program: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        marginTop: '30px',
        paddingLeft: '30px',
        width: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '230px',
        marginTop: '10px',
        marginRight: '10px',
        border: '1px solid #00b96b',
    },
    image: {
        width: '70px',
        height: '70px',
    },
    infoInCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    textInCard: {
        display: 'flex',
        fontSize: '14px',
        marginLeft: '10px',
    },
    nameInCard: {
        display: 'flex',
        marginLeft: '5px',
        marginTop: '5px',
        fontSize: '14px',
    },
});