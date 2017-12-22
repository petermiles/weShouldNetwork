import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, Modal, ScrollView } from "react-native";

import {
	ModalContainer,
	ModalContent,
	ModalHeader,
	ModalHeaderText,
	ModalFooter,
	FooterButton,
	FooterButtonText,
	Slide,
	ProviderContainer,
	Provider,
	ProviderText,
} from "./styles";

export default class AddLinkModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			providers: ["LinkedIn", "Twitter", "Medium", "Phone", "Email"],
		};
	}

	render() {
		return (
			<Modal transparent={true} visible={this.props.visible} onRequestClose={this.props.closeModal} animationType={"slide"}>
				<ModalContainer>
					<ModalContent>
						<ScrollView horizontal={true} pagingEnabled={true}>
							<Slide>
								<ModalHeader>
									<ModalHeaderText> Choose a Provider </ModalHeaderText>
								</ModalHeader>
								<ProviderContainer>
									{this.state.providers.map((x, i) => (
										<Provider key={i} color={x.toLowerCase()}>
											<Icon name={x.toLowerCase()} style={{ color: "white", fontSize: 30, height: 30 }} />
											<ProviderText> {x} </ProviderText>
										</Provider>
									))}
								</ProviderContainer>
							</Slide>
							<Slide color={"red"}>
								<Text> Hello </Text>
							</Slide>
							<Slide color={"blue"}>
								<Text> Hello </Text>
							</Slide>
						</ScrollView>
					</ModalContent>
				</ModalContainer>
			</Modal>
		);
	}
}




{"id":"bce5e26c-0842-d1ae-1f36-49f5183aca6d","name":"Flights Browse Prices","description":"","order":["40e1933c-b1c7-2759-efb5-865db9b57d84","ccede392-e90b-5110-8c07-dce61e447182","7546b960-7dbd-aee5-892f-879018b28ab2","65b0a3bf-96eb-3899-cb8c-18e2444c0731"],"folders":[],"timestamp":1480069032219,"owner":"827147","public":false,"requests":[{"id":"40e1933c-b1c7-2759-efb5-865db9b57d84","headers":"","url":"http:\/\/partners.api.skyscanner.net\/apiservices\/browsequotes\/v1.0\/FR\/eur\/en-US\/uk\/us\/anytime\/anytime?apikey=prtl6749387986743898559646983194","pathVariables":[],"preRequestScript":null,"method":"GET","collectionId":"bce5e26c-0842-d1ae-1f36-49f5183aca6d","data":null,"dataMode":"params","name":"Browse Quotes","description":"Browse quotes API call\n\n","descriptionFormat":"html","time":1480088855541,"version":2,"responses":[],"tests":null,"currentHelper":"normal","helperAttributes":[]},{"id":"65b0a3bf-96eb-3899-cb8c-18e2444c0731","headers":"","url":"http:\/\/partners.api.skyscanner.net\/apiservices\/browsegrid\/v1.0\/FR\/eur\/en-US\/lond\/pari\/2017\/2017?apikey=prtl6749387986743898559646983194","pathVariables":[],"preRequestScript":null,"method":"GET","collectionId":"bce5e26c-0842-d1ae-1f36-49f5183aca6d","data":null,"dataMode":"params","name":"Browse Grid","description":"Browse grid API call from London to Paris in 2017.\n\n","descriptionFormat":"html","time":1480091286717,"version":2,"responses":[],"tests":null,"currentHelper":"normal","helperAttributes":[]},{"id":"7546b960-7dbd-aee5-892f-879018b28ab2","headers":"","url":"http:\/\/partners.api.skyscanner.net\/apiservices\/browsedates\/v1.0\/FR\/eur\/en-US\/lond\/pari\/2017\/2017?apikey=prtl6749387986743898559646983194","pathVariables":[],"preRequestScript":null,"method":"GET","collectionId":"bce5e26c-0842-d1ae-1f36-49f5183aca6d","data":null,"dataMode":"params","name":"Browse Dates","description":"Browse dates API call from London to Paris in 2017.\n\n","descriptionFormat":"html","time":1480090853345,"version":2,"responses":[],"tests":null,"currentHelper":"normal","helperAttributes":[]},{"id":"ccede392-e90b-5110-8c07-dce61e447182","headers":"","url":"http:\/\/partners.api.skyscanner.net\/apiservices\/browseroutes\/v1.0\/FR\/eur\/en-US\/us\/anywhere\/anytime\/anytime?apikey=prtl6749387986743898559646983194","pathVariables":[],"preRequestScript":null,"method":"GET","collectionId":"bce5e26c-0842-d1ae-1f36-49f5183aca6d","data":null,"dataMode":"params","name":"Browse Routes","description":"","descriptionFormat":"html","time":1480069032219,"version":2,"responses":[],"tests":null,"currentHelper":"normal","helperAttributes":[]}]}