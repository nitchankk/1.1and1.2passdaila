class Membership {
        static auto = 1;
        members = [];
    
        constructor() {
            this.members = [];
        }
    
        findMemberId(id) {
            return this.members.findIndex(member => member.memberId === id);
        }
    
        findMemberName(name) {
            const lowerCaseName = name.toLowerCase();
            return this.members.findIndex(member => member.memberName.toLowerCase() === lowerCaseName);
        }
    
        subscribe(name) {
            const existingIndex = this.findMemberName(name);
            if (existingIndex !== -1) {
                return -1; // Duplicate member name
            }
    
            const newMemberId = Membership.autold++;
            const newMember = {
                memberId: newMemberId,
                memberName: name
            };
            this.members.push(newMember);
            return this.members.length; // New length of members array
        }
    
        unsubscribe(id) {
            if (id === undefined) {
                return -1;
            }
    
            const index = this.findMemberId(id);
            if (index === -1) {
                return -1;
            }
    
            const memberId = this.members[index].memberId;
            this.members.splice(index, 1);
            return memberId;
        }
    }
    
    // Example usage:
    const membership = new Membership();
    console.log(membership.subscribe('Alison Butler')); // 1
    console.log(membership.subscribe('Simon Brown'));   // 2
    console.log(membership.subscribe('Tim Carr'));      // 3
    console.log(membership.subscribe('Neil Davidson')); // 4
    
    console.log(membership.unsubscribe(2)); // 2 (removed Simon Brown)
    console.log(membership.unsubscribe(5)); // -1 (not found)
    
